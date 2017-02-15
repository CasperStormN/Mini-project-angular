import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/Product';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'single',
  templateUrl: './app/single/single.component.html',
})
export class SingleComponent  {

	productid:number;
	product:IProduct;

	constructor(private _route:ActivatedRoute,
				private _router:Router,
				private _DataService:DataService) {

	}

	ngOnInit() {
		this.productid = +this._route.snapshot.params['id'];
		this.product = this._DataService.getDataByID(this.productid);
	}
}