import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/Product';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'front',
  templateUrl: './app/front/front.component.html',
})
export class FrontComponent implements OnInit { 

	products:IProduct[];

	constructor(private DataService:DataService) {

	}

	ngOnInit() {
		this.products = this.DataService.getData();

	}



}

