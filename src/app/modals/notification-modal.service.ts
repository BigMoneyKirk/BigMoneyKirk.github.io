import { Injectable } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NotificationModalComponent } from '../main-content/modal-content/notification-modal/notification-modal.component';
import { INgxSmartModalOptions } from 'ngx-smart-modal/src/config/ngx-smart-modal.config';

@Injectable({
  providedIn: 'root'
})
export class NotificationModalService {

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  public success(text: string){
    const opts: INgxSmartModalOptions = {
      backdrop: true
    };
    var modal = this.ngxSmartModalService.create('SuccessModal', NotificationModalComponent, opts)
    modal.setData(text).open();
  }

  public error(text: string){
    const opts: INgxSmartModalOptions = {
      backdrop: true
    };
    var modal = this.ngxSmartModalService.create('ErrorModal', NotificationModalComponent, opts)
    modal.setData(text).open();
  }
}
