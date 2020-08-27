import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-button',
  templateUrl: './store-button.component.html',
  styleUrls: ['./store-button.component.scss']
})
export class StoreButtonComponent implements OnInit {


  @Input() storeType: "Mac"|"Android";
  @Input() coloringStyle: "Black"|"Grey";

  constructor() { }

  ngOnInit(): void {
  }

}
