import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  a:Number = 29;
  b:String = 'Samarth'
  c:Date = new Date('10/28/2001')

  ngOnInit(): void {
  }

}
