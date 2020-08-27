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

  externalLink() {
    if( this.coloringStyle == "Grey") {
      if( this.storeType == "Mac") {
        return "https://www.apple.com/"
      } else return "https://www.google.com/";
    } else  if( this.storeType == "Mac") 
        return "https://www.apple.com/ios/app-store/";
        else return "https://play.google.com/store";
  }

}
