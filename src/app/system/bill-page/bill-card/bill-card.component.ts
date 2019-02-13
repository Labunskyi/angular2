import { Component, OnInit, Input } from '@angular/core';

import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {
	
  @Input() bill: Bill;
  @Input() currency: any;
  
  dollar: number;
  uah: number;
  

  constructor() { }

  ngOnInit() {
	  
	  const { rates } = this.currency;
	  this.dollar = rates['USD'] * this.bill.value;
	  this.uah = rates['UAH'] * this.bill.value;
  }

}
