package com.ontimize.backendG3.ws.core.rest;

import com.ontimize.backendG3.api.core.service.IMasterService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trailers")
public class TrailerRestController extends ORestController<IMasterService> {

    @Autowired
    private IMasterService masterService;

    @Override
    public IMasterService getService() {
        return this.masterService;
    }
}