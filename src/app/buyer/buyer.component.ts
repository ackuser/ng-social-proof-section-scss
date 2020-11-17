import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
