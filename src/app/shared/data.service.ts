import { Injectable } from '@angular/core';
import { IProduct } from './Product';
import { PRODUCTDATA } from './data';


@Injectable() 
export class DataService {
	getData():IProduct[] {
		return PRODUCTDATA;
	}

	getDataByID(productid:number) {
		return PRODUCTDATA.find(r => r.id == productid);
	}
}
