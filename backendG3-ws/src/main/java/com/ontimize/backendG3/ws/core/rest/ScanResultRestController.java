package com.ontimize.backendG3.ws.core.rest;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/results")
public class ScanResultRestController  extends ORestController<IScanResultService> {

    @Autowired
    private IScanResultService scanResultService;

    @Override
    public IScanResultService getService() {
        return this.scanResultService;
    }

    @RequestMapping(
            value = "/scan",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EntityResult> scan(@RequestBody Map<String,Object> datos) {
        EntityResult result = this.scanResultService.scanResultInsert(datos);
        if(result.getCode() == 0){
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else if (result.getCode() == 1){
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
