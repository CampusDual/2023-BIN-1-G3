package com.ontimize.backendG3.model.core.service;

import com.ontimize.backendG3.api.core.service.IScanService;
import com.ontimize.backendG3.model.core.dao.DeviceDao;
import com.ontimize.backendG3.model.core.dao.ScanDao;
import com.ontimize.backendG3.model.core.dao.TrailerDao;
import com.ontimize.backendG3.model.core.dao.TruckDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    public EntityResult scanInsert(Map<String, Object> attrMap) {


        Map<String, Object> nonScanData = removeNonRelatedData(attrMap, ScanDao.ID_DEV_IN,
                ScanDao.ID_DEV_OUT, ScanDao.ID_TRAILER, ScanDao.ID_TRUCK);
        this.insertNonRelatedData(nonScanData);
        attrMap.putAll(nonScanData);
        return this.daoHelper.insert(this.scanDao, attrMap);

        //return this.daoHelper.insert(scanDao, attrMap);
    }

    public EntityResult scanUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(scanDao, attrMap, keyMap);
    }

    // En agosto

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
                        toret = this.masterService.truckInsert(data);
                        entry.setValue(toret.get(TruckDao.ID_TRUCK));
                    }
                    break;
                default:
                    break;
            }
        }
    }

}
