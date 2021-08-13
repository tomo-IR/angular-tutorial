import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css']
})
export class TokyoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  wards = [ 
    {
      name: "世田谷",
      population:200000,
      square: 30000
    },
    {
      name: "渋谷",
      population:500000,
      square: 20000
    }
  ]
}