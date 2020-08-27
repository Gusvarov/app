import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-theme-sel',
  templateUrl: './theme-sel.component.html',
  styleUrls: ['./theme-sel.component.scss']
})
export class ThemeSelComponent implements OnInit {
  pictures = [];
  selectedPic = [];
  // selectedPic = [
  //   { id: 1 }
  // ]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    for (let i = 1; i <= 16; i++) {
      // this.pictures.push({
      //   id: i
      // })
      this.pictures.push(i)
    }
    // console.log(this.pictures)

  }
  setPicture(e) {
    // this.selectedPic.pop();
    // this.selectedPic.push({
    //   id: e.target.alt
    // });
    
    this.dataService.setPicture(e);
    
  }
  addCircles() {

  }
}


