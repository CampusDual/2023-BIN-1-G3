package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "TruckDao")
@ConfigurationFile(
        configurationFile = "dao/TruckDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class TruckDao extends OntimizeJdbcDaoSupport {

    public static final String ID_TRUCK = "id_truck";
    public static final String PLATE = "plate";

    public static final String ttype = "ttype";

}
