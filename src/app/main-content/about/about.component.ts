import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messing-around-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public statement(){
    return `I would like to give a special shoutout to the families. The ones who have stuck in there through thick and thin. The ones who have known us from birth. A special cheers and thanks to you all. I love you.`;
  }

  public story(){
    return `This is my story. Stephen Michael Kirkland. The Lord came to me when I was being quiet and still before him. He has blessed me exceedingly. I have been on a tough and rough journey. This will be the site that I publish just for myself to prove that I can do it, in the name of Jesus Christ Almighty! [Added Thursday, October 10, 2019 10:40 PM EST]`;
  }

}
