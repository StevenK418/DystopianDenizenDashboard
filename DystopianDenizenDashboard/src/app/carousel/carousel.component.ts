import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides:string[] = [];

  constructor(){
  }

  ngOnInit(): void {
    this.slides.push('../../assets/images/landscape/jefferson-santos.jpg');
    this.slides.push('../../assets/images/landscape/cyberpunk2.jpg');
    this.slides.push('https://media.gq-magazine.co.uk/photos/5fce371ef264d85bcbdfc033/16:9/pass/Cyberpunk%202077.jpg');
  }
}
