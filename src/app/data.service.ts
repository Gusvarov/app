import { Injectable } from '@angular/core';
import { IData } from './data'
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  cardData = new BehaviorSubject<IData>({
    buisnessDetails: {
      buisnessName: null,
      locations: [],
    },
    configuration: {
      templateId: '1',
      count: null,
      title: null
    }
  })

  constructor() { }

  setPicture(e) {
    let model = this.cardData.value;
    model.configuration.templateId = e
    // console.log(model.configuration.templateId)
    console.log(model)
    

  }
}


