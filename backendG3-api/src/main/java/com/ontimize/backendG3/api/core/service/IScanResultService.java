package com.ontimize.backendG3.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IScanResultService {

    public EntityResult scanResultQuery(Map<?, ?> keyMap, List<?> attrList);

}

