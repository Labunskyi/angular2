import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../../shared/core/base-api';

import { Bill } from '../models/bill.model';

@Injectable()
export class BillService extends BaseApi {
	constructor(public http: Http) {
		super(http);
	}
	
	getBill(): Observable<Bill>{
		/* return this.http.get('http://localhost:3000/bill') <-- сократили код с помощью BaseApi
		.map((response: Response) => response.json()); */
		return this.get('bill');
	}
	
	updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }
	
	getCurrency(base: string = 'EUR'): Observable<any>{
		
		return this.http.get(`http://data.fixer.io/api/latest?access_key=650484203641753b0b29105ad35aee95&base=${base}`)
		.map((response: Response) => response.json());
	}
}

