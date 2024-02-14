import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  showText: Boolean = false;
  expand: String = "expand_more";

  open(){
    this.showText = !this.showText;

    if(this.expand === "expand_more")
      this.expand = "expand_less";
    else
      this.expand = "expand_more";
    
  }
}
