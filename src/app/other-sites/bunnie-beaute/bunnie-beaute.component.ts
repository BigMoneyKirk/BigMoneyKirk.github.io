import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';

@Component({
  selector: 'messing-around-bunnie-beaute',
  templateUrl: './bunnie-beaute.component.html',
  styleUrls: ['./bunnie-beaute.component.scss']
})
export class BunnieBeauteComponent implements OnInit {

  constructor(private imgService: GlobalImageService) { }

  public kaka: string = this.imgService.kaka;

  ngOnInit() {
  }

}
