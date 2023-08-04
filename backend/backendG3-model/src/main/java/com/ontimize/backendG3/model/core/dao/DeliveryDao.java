package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "DeliveryDao")
@ConfigurationFile(
        configurationFile = "dao/DeliveryDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class DeliveryDao extends OntimizeJdbcDaoSupport {

    public static final String ID_DELIVERY = "id_delivery";
    public static final String DELIVERY_NOTE = "delivery_note";

    public static final String ID_TRUCK = "id_truck";

    public static final String ID_TRAILER = "id_trailer";

}
