import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  showText: Boolean = false;
  text: any = null

  open(){
    this.showText = !this.showText;
    if(this.text == null)
      this.text = 0;
    else
      this.text = null
  }

}
