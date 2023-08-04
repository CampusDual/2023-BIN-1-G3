package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "DeviceDao")
@ConfigurationFile(
        configurationFile = "dao/DeviceDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class DeviceDao extends OntimizeJdbcDaoSupport {

    public static final String ID_DEVICE = "id_device";
    public static final String DEV = "dev";

}
