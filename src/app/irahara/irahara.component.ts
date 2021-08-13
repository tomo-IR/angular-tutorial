import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-irahara',
  templateUrl: './irahara.component.html',
  styleUrls: ['./irahara.component.css']
})
export class IraharaComponent implements OnInit {
 @Input() name;
  constructor() { }

  ngOnInit() {
  }

}