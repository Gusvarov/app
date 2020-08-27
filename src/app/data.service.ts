import { Injectable } from '@angular/core';
import { IData } from './data'
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  uid: IData = {
    buisnessDetails: {
      buisnessName: null,
      locations: [],
    },
    configuration: {
      templateId: null,
      count: null,
      title: null
    }
  }
  constructor() { }

  setColor(e) {
    this.uid.configuration.templateId = e.target.alt
   console.log(this.uid.configuration.templateId)
  }
}


