import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';

@Component({
  selector: 'messing-around-kirkland-loan',
  templateUrl: './kirkland-loan.component.html',
  styleUrls: ['./kirkland-loan.component.scss']
})
export class KirklandLoanComponent implements OnInit {

  constructor(private imgService: GlobalImageService) { }

  public moneySmiley = this.imgService.moneySmiley;

  ngOnInit() {
  }

}
