package com.ontimize.backendG3.ws.core.rest;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/results")
public class ScanResultRestController  extends ORestController<IScanResultService> {

    @Autowired
    private IScanResultService scanResultService;

    @Override
    public IScanResultService getService() {
        return this.scanResultService;
    }

}
