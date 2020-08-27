import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  selectedPic = [
    { id: 1 }
  ];
  
  reward=''
  circles = [
    // { id: 1 },
    // { id: 2 },
  ]
  // @Input() pic
  constructor() { }

  ngOnInit() {
  
    
  }

}
