package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ScanResultDao")
@ConfigurationFile(
        configurationFile = "dao/ScanResultDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ScanResultDao extends OntimizeJdbcDaoSupport {

    public static final String ID_SCAN_RESULT = "id_scan_result";
    public static final String DEV = "dev";
    public static final String DATE = "date";
    public static final String SCAN_VOLUME = "scan_volume";
    public static final String CALCULATE_VOLUME = "calculate_volume";
    public static final String PLATE = "plate";
    public static final String HEIGHT = "height";
    public static final String WIDTH = "width";
    public static final String LENGTH = "length";

    public static final String TRAILER_PLATE = "trailer_plate";

    public static final String DELIVERY_NOTE = "delivery_note";

}
