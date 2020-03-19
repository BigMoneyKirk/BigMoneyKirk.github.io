import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';

@Component({
  selector: 'messing-around-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public coronaGIF = this.globalImage.coronaGIF;

  constructor(private globalImage: GlobalImageService) { }

  ngOnInit() {
  }

}
