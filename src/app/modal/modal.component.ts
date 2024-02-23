import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private el: ElementRef) {
  }

  isOpen = false;

  modalControl(){
    this.isOpen = !this.isOpen;
    this.isOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "";
    this.el.nativeElement.focus();
  }
}
