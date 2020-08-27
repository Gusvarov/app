import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  rot;
  a;

  constructor(private route: ActivatedRoute) {
    console.log(this.a)
   // this.rot = this.route.routeConfig
   }

   getData(data) {
     this.a = data;
     console.log(this.a)
    return this.a;
   }
  }
