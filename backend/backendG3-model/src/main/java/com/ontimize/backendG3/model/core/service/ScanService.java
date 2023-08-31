package com.ontimize.backendG3.model.core.service;

import com.ontimize.backendG3.api.core.service.IScanService;
import com.ontimize.backendG3.model.core.dao.*;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Array;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Lazy
@Service("ScanService")
public class ScanService implements IScanService {

    @Autowired
    private ScanDao scanDao;

    @Autowired
    private MasterService masterService;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult scanQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(scanDao, keyMap, attrList);
    }

    public EntityResult scanByDateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.scanDao, keyMap, attrList, "groupByDate");
    }


    /*public EntityResult scanLoadVolumeQuery(Map<String, Object> keyMap,List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.scanDao, keyMap, attrList, "loadvolume");
    }*/


    @Transactional(rollbackFor = Exception.class)
    public EntityResult scanInsert(Map<String, Object> attrMap) {

        Map<String, Object> data = new HashMap<String, Object>();
        Map<String, Object> keyMap = new HashMap<String, Object>();
        String io;

        List<Object> cols = new ArrayList<>();
        keyMap.put(ScanDao.DELIVERY_NOTE, (String) attrMap.get("delivery_note").toString());
        cols.add(ScanDao.ID_SCAN_RESULT);
        if (attrMap.get("dev").toString().startsWith("IN")) {
            data.put(ScanDao.ID_DEV_IN, attrMap.get("dev"));
            data.put(ScanDao.SCAN_DATE_IN, dateFormat((String) attrMap.get("date")));
            data.put(ScanDao.SCAN_VOLUME_IN, (Double) attrMap.get("scan_volume"));
            cols.add(ScanDao.ID_DEV_IN);
            io = ScanDao.ID_DEV_IN;
        } else {
            data.put(ScanDao.ID_DEV_OUT, (String) attrMap.get("dev"));
            data.put(ScanDao.SCAN_DATE_OUT, dateFormat((String) attrMap.get("date")));
            data.put(ScanDao.SCAN_VOLUME_OUT, (Double) attrMap.get("scan_volume"));
            data.put(ScanDao.CALCULATED_VOLUME, (Double) attrMap.get("calculated_volume"));
            cols.add(ScanDao.ID_DEV_OUT);
            io = ScanDao.ID_DEV_OUT;
        }

        EntityResult x = this.scanQuery(keyMap, cols);
        Object id_scan_value = 0;
        boolean exist = false;
        for (int i = 0; i < x.calculateRecordNumber(); i++) {
            if (x.getRecordValues(i).get(io) == null) {
                id_scan_value = x.getRecordValues(i).get(ScanDao.ID_SCAN_RESULT);
                exist = true;
                break;
            }
        }

        if (!exist) {
            data.put(ScanDao.THEIGHT, (Double) attrMap.get("height"));
            data.put(ScanDao.TWIDTH, (Double) attrMap.get("width"));
            data.put(ScanDao.TLENGTH, (Double) attrMap.get("length"));
            data.put(ScanDao.DELIVERY_NOTE, attrMap.get("delivery_note").toString());
            data.put(ScanDao.ID_TRUCK, (String) attrMap.get("plate"));
            data.put(ScanDao.ID_TRAILER, (String) attrMap.get("trailer_plate"));
            Map<String, Object> nonScanData = removeNonRelatedData(data, ScanDao.ID_DEV_IN,
                    ScanDao.ID_DEV_OUT, ScanDao.ID_TRAILER, ScanDao.ID_TRUCK);
            this.insertNonRelatedData(nonScanData);
            data.putAll(nonScanData);
            return this.daoHelper.insert(this.scanDao, data);
        } else {
            keyMap.clear();
            keyMap.put(ScanDao.ID_SCAN_RESULT, id_scan_value);
            return this.scanUpdate(data, keyMap);
        }
    }

    private static Timestamp dateFormat(String date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d = null;
        try {
            d = sdf.parse(date);
            Timestamp tiempo = new Timestamp(d.getTime());
            return tiempo;
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public EntityResult scanUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        Map<String, Object> nonScanData = removeNonRelatedData(attrMap, ScanDao.ID_DEV_IN,
                ScanDao.ID_DEV_OUT, ScanDao.ID_TRAILER, ScanDao.ID_TRUCK);
        this.insertNonRelatedData(nonScanData);
        attrMap.putAll(nonScanData);
        return this.daoHelper.update(this.scanDao, attrMap, keyMap);
    }

    public EntityResult scanDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.scanDao, keyMap);
    }

    private Map<String, Object> removeNonRelatedData(Map<String, Object> attrMap, String... attrToExclude) {
        HashMap<String, Object> data = new HashMap<String, Object>();
        for (String attr : attrToExclude) {
            if (attrMap.containsKey(attr) && attrMap.get(attr) instanceof String) {
                data.put(attr, attrMap.remove(attr));
            }
        }
        return data;
    }

    private void insertNonRelatedData(Map<String, Object> nonScanData) {
        for (Map.Entry<String, Object> entry : nonScanData.entrySet()) {
            Map<String, Object> data = new HashMap<String, Object>();
            List<String> attr = new ArrayList<String>();
            EntityResult toret, query;
            switch (entry.getKey()) {
                case ScanDao.ID_DEV_IN:
                case ScanDao.ID_DEV_OUT:
                    data.put(DeviceDao.DEV, entry.getValue());
                    attr.add(DeviceDao.ID_DEVICE);
                    query = this.masterService.deviceQuery(data, attr);
                    if (query.calculateRecordNumber() > 0) {
                        entry.setValue(query.getRecordValues(0).get(DeviceDao.ID_DEVICE));
                    } else {
                        toret = this.masterService.deviceInsert(data);
                        entry.setValue(toret.get(DeviceDao.ID_DEVICE));
                    }
                    break;
                case ScanDao.ID_TRAILER:
                    data.put(TrailerDao.TRAILER_PLATE, entry.getValue());
                    attr.add(TrailerDao.ID_TRAILER);
                    query = this.masterService.trailerQuery(data, attr);
                    if (query.calculateRecordNumber() > 0) {
                        entry.setValue(query.getRecordValues(0).get(TrailerDao.ID_TRAILER));
                    } else {
                        toret = this.masterService.trailerInsert(data);
                        entry.setValue(toret.get(TrailerDao.ID_TRAILER));
                    }
                    break;
                case ScanDao.ID_TRUCK:
                    data.put(TruckDao.PLATE, entry.getValue());
                    attr.add(TruckDao.ID_TRUCK);
                    query = this.masterService.truckQuery(data, attr);
                    if (query.calculateRecordNumber() > 0) {
                        entry.setValue(query.getRecordValues(0).get(TruckDao.ID_TRUCK));
                    } else {
                        data.put(TruckDao.ttype, nonScanData.get(ScanDao.ID_TRAILER) == null ? 1 : 0);
                        toret = this.masterService.truckInsert(data);
                        entry.setValue(toret.get(TruckDao.ID_TRUCK));
                    }
                    break;
                default:
                    break;
            }
        }
    }

    public EntityResult scanDataQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.scanDao, keyMap, attrList, "data");

    }


}
