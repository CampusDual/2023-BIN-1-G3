package com.ontimize.backendG3.ws.core.rest;

import com.ontimize.backendG3.api.core.service.IScanResultService;
import com.ontimize.backendG3.model.core.dao.ScanDao;
import com.ontimize.jee.common.db.SQLStatementBuilder;
import com.ontimize.jee.common.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.jee.common.db.SQLStatementBuilder.BasicField;
import com.ontimize.jee.common.db.SQLStatementBuilder.BasicOperator;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import com.ontimize.backendG3.model.core.dao.ScanResultDao;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/test")
public class TestRestController extends ORestController<IScanResultService> {

	@Autowired
	private IScanResultService scanResultService;

	@Override
	public IScanResultService getService() {

		return this.scanResultService;
	}
	@RequestMapping(value = "/test", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> testRest() {

		return new ResponseEntity<>("It Works!", HttpStatus.OK);
	}

	@RequestMapping(value = "/volumen1/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult volumentruck(@RequestBody Map<String, Object> req) {
		try {
			List<String> columns = (List<String>) req.get("columns");
			Map<String, Object> filter = (Map<String, Object>) req.get("filter");
			float volume = (float) filter.get("VOLUME");
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
					searchBetweenWithVolume(ScanDao.SCAN_VOLUME_IN, ScanDao.SCAN_VOLUME_OUT, volume));
			return scanResultService.scanResultQuery(key, columns);
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResultMapImpl();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
		}
	}

	private BasicExpression searchBetween(String param,String param2) {

		float volume = 1;

		return this.searchBetweenWithVolume(param, param2, 1);
	}

	private BasicExpression searchBetweenWithVolume(String param1, String param2, float volume) {

		/* Se instancia llamando a su constructor con el nombre de la columna */
		BasicField field1 = new SQLStatementBuilder.BasicField(param1);

		BasicField field2 = new SQLStatementBuilder.BasicField(param2);

		/* "Campo, Operacion y valor" son los parametros que recibe el BasicExpression en SQL */
		/* Mayor o igual que la fecha de inicio */

		BasicExpression bexp1 = new SQLStatementBuilder.BasicExpression(field1, BasicOperator.LESS_OP, volume);

		/* fecha menor que la fecha de fin */
		BasicExpression bexp2 = new SQLStatementBuilder.BasicExpression(field2, BasicOperator.LESS_OP, volume);

		/* Creamos una expresion and entre la primera expresión y la segunda */
		/* fecha inicio and fecha fin */
		return new SQLStatementBuilder.BasicExpression(bexp1, BasicOperator.OR_OP, bexp2);
	}

}
