import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  counter: number = 2;
  reward = '';
  selectedPic = [
    // { id: 1 }
  ]
  circles = [
    { id: 1 },
    { id: 2 },
  ]
  constructor() { }

  ngOnInit() {
  
  }
  increment() {
    if (this.counter < 20) {
      ++this.counter;
      this.circles.push({
        id: this.counter
      })

    } else {
      return null
    }
  }
  decrement() {
    if (this.counter > 2) {
      --this.counter;
      this.circles.pop()

    } else {
      return null
    }
  }
}

