package com.ontimize.backendG3.model.core.service;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.backendG3.api.core.service.IScanService;
import com.ontimize.backendG3.model.core.dao.ScanDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("ScanService")
public class ScanService implements IScanService {

    @Autowired
    private ScanDao scanDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult scanQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(scanDao, keyMap, attrList);
    }

    public EntityResult scanInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(scanDao, attrMap);
    }

    public EntityResult scanUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(scanDao, attrMap, keyMap);
    }

    public EntityResult scanDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.scanDao, keyMap);
    }

}
