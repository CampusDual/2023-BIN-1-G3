package com.ontimize.backendG3.model.core.service;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.backendG3.api.core.service.IUserService;
import com.ontimize.backendG3.model.core.dao.ScanResultDao;
import com.ontimize.backendG3.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("ScanResultService")
public class ScanResultService implements IScanResultService {

    @Autowired
    private ScanResultDao scanResultDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    public EntityResult scanResultQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(scanResultDao, keyMap, attrList);
    }

    public EntityResult scanResultInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(scanResultDao, attrMap);
    }

    public EntityResult scanResultUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(scanResultDao, attrMap, keyMap);
    }

    public EntityResult scanResultDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.scanResultDao, keyMap);
    }

}
