import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  cardData$;
  templatePath = '../../assets/images/1.png'
  reward = ''
  circles = [
    // { id: 1 },
    // { id: 2 },
  ]
  // @Input() pic
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.cardData$ = this.dataService.cardData
    // templatePath=this.dataService.cardData.pipe(
    //   .map(this.cardData$ =>{
    //     return card
    //   })
    // )
    console.log(this.cardData$)
    // this.cardData = this.dataService.cardData.value
    // let a = this.dataService.cardData.value.configuration.templateId
    // console.log(a)

  }

}
