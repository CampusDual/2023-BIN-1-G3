package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "TrailerDao")
@ConfigurationFile(
        configurationFile = "dao/TrailerDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class TrailerDao extends OntimizeJdbcDaoSupport {

    public static final String ID_TRAILER = "id_trailer";
    public static final String TRAILER_PLATE = "trailer_plate";

}
