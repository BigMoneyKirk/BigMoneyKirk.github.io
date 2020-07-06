import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'messing-around-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {

  public text: string;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    if (this.ngxSmartModalService.getModalData('SuccessModal'))
    {
      let modalElement = document.getElementsByClassName('nsm-content') as HTMLCollectionOf<HTMLElement>;
      modalElement[0].style.backgroundColor = "limegreen";
      modalElement[0].style.color = "white";

      this.text = this.ngxSmartModalService.getModalData('SuccessModal');
    }
    else if (this.ngxSmartModalService.getModalData('ErrorModal'))
    {
      let modalElement = document.getElementsByClassName('nsm-content') as HTMLCollectionOf<HTMLElement>;
      modalElement[0].style.backgroundColor = "#8a0303";
      modalElement[0].style.color = "white";

      this.text = this.ngxSmartModalService.getModalData('ErrorModal');
    }
  }

  ngOnDestroy(){
    this.ngxSmartModalService.resetModalData('SuccessModal');
    this.ngxSmartModalService.resetModalData('ErrorModal');
  }

}
