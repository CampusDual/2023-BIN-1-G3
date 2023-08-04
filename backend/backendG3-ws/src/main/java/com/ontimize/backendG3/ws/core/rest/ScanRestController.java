package com.ontimize.backendG3.ws.core.rest;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.backendG3.api.core.service.IScanService;
import com.ontimize.backendG3.model.core.dao.ScanDao;
import com.ontimize.jee.common.db.SQLStatementBuilder;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/scans")
public class ScanRestController  extends ORestController<IScanService> {

    @Autowired
    private IScanService scanService;

    @Override
    public IScanService getService() {
        return this.scanService;
    }

    @RequestMapping(
            value = "/scan",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EntityResult> scan(@RequestBody Map<String,Object> datos) {
        EntityResult result = this.scanService.scanInsert(datos);
        if(result.getCode() == EntityResult.OPERATION_SUCCESSFUL){
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else if (result.getCode() == EntityResult.OPERATION_WRONG){
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/volumen1/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResult volumentruck(@RequestBody Map<String, Object> req) {
        try {
            List<String> columns = (List<String>) req.get("columns");
            Map<String, Object> filter = (Map<String, Object>) req.get("filter");
            //Double volume = (Double) filter.get("VOLUME");
            Map<String, Object> basic_expression = (Map<String, Object>) filter.get("@basic_expression");
            Map<String, Object> lop = (Map<String, Object>) basic_expression.get("lop");
            String op = (String) basic_expression.get("op");
            Map<String, Object> rop = (Map<String, Object>) basic_expression.get("rop");
            String campo1 = (String) lop.get("lop");
            String op1 = (String) lop.get("op");
            Double volume1 = (Double) lop.get("rop");
            String campo2 = (String) rop.get("lop");
            String op2 = (String) rop.get("op");
            Double volume2 = (Double) rop.get("rop");


            //Double volume = (Double)((Map<String, Object>) ((Map<String, Object>) filter.get("@basic_expression")).get("lop")).get("rob");
            Map<String, Object> key = new HashMap<String, Object>();
            key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
                    searchBetweenWithVolume(campo1, campo2, volume1, volume2,op1, op2));
            return scanService.scanQuery(key, columns);
        } catch (Exception e) {
            e.printStackTrace();
            EntityResult res = new EntityResultMapImpl();
            res.setCode(EntityResult.OPERATION_WRONG);
            return res;
        }
    }

    private SQLStatementBuilder.BasicExpression searchBetween(String param, String param2, Double volumen1, Double volumen2, String op1, String op2, String op) {

        Double volume = 1.0;

        return this.searchBetweenWithVolume(param, param2, volumen1,  volumen2,  op1,  op2);
    }

    private SQLStatementBuilder.BasicExpression searchBetweenWithVolume(String param1, String param2, Double volumen1, Double volumen2, String op1, String op2) {

        /* Se instancia llamando a su constructor con el nombre de la columna */
        SQLStatementBuilder.BasicField field1 = new SQLStatementBuilder.BasicField(param1);

        SQLStatementBuilder.BasicField field2 = new SQLStatementBuilder.BasicField(param2);

        /* "Campo, Operacion y valor" son los parametros que recibe el BasicExpression en SQL */
        /* Mayor o igual que la fecha de inicio */

        SQLStatementBuilder.BasicExpression bexp1 = new SQLStatementBuilder.BasicExpression(field1, SQLStatementBuilder.BasicOperator.MORE_OP, volumen1);

        /* fecha menor que la fecha de fin */
        SQLStatementBuilder.BasicExpression bexp2 = new SQLStatementBuilder.BasicExpression(field2, SQLStatementBuilder.BasicOperator.MORE_OP, volumen2);

        /* Creamos una expresion and entre la primera expresión y la segunda */
        /* fecha inicio and fecha fin */
        return new SQLStatementBuilder.BasicExpression(bexp1, SQLStatementBuilder.BasicOperator.AND_OP, bexp2);
    }




}
