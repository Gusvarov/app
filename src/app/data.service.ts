import { Injectable } from '@angular/core';
import { IData } from './data'

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
}


