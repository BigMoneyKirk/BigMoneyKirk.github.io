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
      this.text = this.ngxSmartModalService.getModalData('SuccessModal');
    }
    else if (this.ngxSmartModalService.getModalData('ErrorModal'))
    {
      this.text = this.ngxSmartModalService.getModalData('ErrorModal');
    }
  }

}
