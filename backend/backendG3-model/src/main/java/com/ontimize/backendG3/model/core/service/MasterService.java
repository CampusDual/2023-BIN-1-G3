package com.ontimize.backendG3.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.backendG3.api.core.service.IMasterService;
import com.ontimize.backendG3.model.core.dao.DeviceDao;
import com.ontimize.backendG3.model.core.dao.DeliveryDao;
import com.ontimize.backendG3.model.core.dao.TruckDao;
import com.ontimize.backendG3.model.core.dao.TrailerDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("MasterService")
@Lazy
public class MasterService implements IMasterService{

    @Autowired private DeliveryDao deliveryDao;
    @Autowired private TruckDao TruckDao;
    @Autowired private TrailerDao TrailerDao;
    @Autowired private DeviceDao DeviceDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult deliveryQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.deliveryDao, keyMap, attrList);
    }

    @Override
    public EntityResult deliveryInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.deliveryDao, attrMap);
    }

    @Override
    public EntityResult deliveryUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.deliveryDao, attrMap, keyMap);
    }

    @Override
    public EntityResult deliveryDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.deliveryDao, keyMap);
    }

    @Override
    public EntityResult truckQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.TruckDao, keyMap, attrList);
    }

    @Override
    public EntityResult truckInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.TruckDao, attrMap);
    }

    @Override
    public EntityResult truckUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.TruckDao, attrMap, keyMap);
    }

    @Override
    public EntityResult truckDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.TruckDao, keyMap);
    }

    @Override
    public EntityResult trailerQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.TrailerDao, keyMap, attrList);
    }

    @Override
    public EntityResult trailerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.TrailerDao, attrMap);
    }

    @Override
    public EntityResult trailerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.TrailerDao, attrMap, keyMap);
    }

    @Override
    public EntityResult trailerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.TrailerDao, keyMap);
    }

    @Override
    public EntityResult deviceQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.DeviceDao, keyMap, attrList);
    }

    @Override
    public EntityResult deviceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.DeviceDao, attrMap);
    }

    @Override
    public EntityResult deviceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.DeviceDao, attrMap, keyMap);
    }

    @Override
    public EntityResult deviceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.DeviceDao, keyMap);
    }


}