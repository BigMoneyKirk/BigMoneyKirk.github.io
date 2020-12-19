import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';

@Component({
  selector: 'messing-around-screven-forward',
  templateUrl: './screven-forward.component.html',
  styleUrls: ['./screven-forward.component.scss']
})
export class ScrevenForwardComponent implements OnInit {

  public screvenPlaza = this.imgService.screvenPlaza;

  constructor(private imgService: GlobalImageService) { }

  ngOnInit() {
  }

  my_mission(){
    return `My mission is to bring the importances of businesses to Screven County. My mission is to encourage the citizens to vote so that their voice is heard and they can impact the community in the way they hope society should look like within ethics.`;
  }

}
