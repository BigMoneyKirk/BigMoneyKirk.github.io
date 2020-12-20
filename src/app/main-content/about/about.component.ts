import { Component, OnInit } from '@angular/core';
import { GlobalImageService } from 'src/app/services/global-image.service';
import $ from 'jquery';

@Component({
  selector: 'messing-around-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public kingUrl = this.globalImage.king;
  public triggerBool: boolean = true;

  constructor(private globalImage: GlobalImageService) { }

  ngOnInit() {
    this.temp_hover_animation();
  }

  public hobbies() {
    return `My hobbies are praising the Lord Jesus Christ, spending time with loved ones, playing video games, listening to music, dancing, reading, and reaching out to others. I love cracking jokes with people and making fun of people. If I make fun of you, it's because I like you and feel comfortable with you. Please feel free to make lighthearted jokes back. That's how I know we are on the same page. ;) And of course I love making websites...duh! lol!`;
  }

  public statement() {
    return `I would like to give a special shoutout to the families. The ones who have stuck in there through thick and thin. The ones who have known us from birth. A special cheers and thanks to you all. I love you.`;
  }

  public story() {
    return `This website started as a personal project; something to prove to myself that I am a competent web developer. I proved myself correct. I have been working on this site for over a year now, and I am extremely pleased with the results. In a few more months, I believe this site will be fully functional, meeting all its MVPs. [Updated Sunday, December 20, 2020 12:25 PM EST]`;
  }

  public temp_hover_animation(){
    $('.buttonHolder')
      .mouseenter(function () {
        $(this).find('.pic').animate({ opacity: 0 }, 400);
        $(this).find('.description').animate({ opacity: 1 }, 400);
      })
      .mouseleave(function () {
        $(this).find('.pic').animate({ opacity: 1 }, 400);
        $(this).find('.description').animate({ opacity: 0 }, 400);
      });
  }
}
