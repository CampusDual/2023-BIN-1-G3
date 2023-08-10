package com.ontimize.backendG3.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IMasterService {

    // truck
    public EntityResult truckQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult truckInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult truckUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult truckDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    // trailer
    public EntityResult trailerQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult trailerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult trailerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult trailerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    // device
    public EntityResult deviceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult deviceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult deviceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult deviceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;


}