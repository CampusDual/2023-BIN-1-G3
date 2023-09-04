package com.ontimize.backendG3.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository(value = "AreaDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AreaDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class AreaDao extends OntimizeJdbcDaoSupport{

    public static final String ATTR_ID_AREA = "id_area";
    public static final String ATTR_AREA_NAME = "area_name";
    public static final String ATTR_CURRENT_LOAD = "current_load";
    public static final String ATTR_MAXIMUM_CAPACITY = "maximum_capacity";
}