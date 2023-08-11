package com.ontimize.backendG3.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ScanDao")
@ConfigurationFile(
        configurationFile = "dao/ScanDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ScanDao extends OntimizeJdbcDaoSupport {

    public static final String ID_SCAN_RESULT = "id_scan_result";

    public static final String ID_DEV_IN = "id_dev_in";

    public static final String ID_DEV_OUT = "id_dev_out";

    public static final String SCAN_DATE_IN = "scan_date_in";

    public static final String SCAN_DATE_OUT = "scan_date_out";

    public static final String SCAN_VOLUME_IN = "scan_volume_in";

    public static final String SCAN_VOLUME_OUT = "scan_volume_out";

    public static final String CALCULATED_VOLUME = "calculated_volume";

    public static final String THEIGHT = "theight";
    public static final String TWIDTH = "twidth";
    public static final String TLENGTH = "tlength";

    public static final String DELIVERY_NOTE = "delivery_note";

    public static final String ID_TRUCK = "id_truck";

    public static final String ID_TRAILER = "id_trailer";

}
