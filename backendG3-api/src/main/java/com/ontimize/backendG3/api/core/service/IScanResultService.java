package com.ontimize.backendG3.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IScanResultService {

    public EntityResult scanResultQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult scanResultInsert(Map<?, ?> attrMap);
    public EntityResult scanResultUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    public EntityResult scanResultDelete(Map<?, ?> keyMap);
}

