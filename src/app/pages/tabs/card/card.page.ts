import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
 swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper; 

  cards: any [] = [];

  constructor() { }
  
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any){
      console.log('changed: ', e)
  }

  ngOnInit() {
    this.cards = [
       {id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '5798 8912 5293 5198', card_holder: 'Marcelo Rangel', exp_date: '08/24'},
       {id: 1, company_img: 'assets/imgs/visa.png', card_no: '6798 8912 5293 5198', card_holder: 'Marcelo Rangel', exp_date: '11/29'},
       {id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '7798 8912 5293 5198', card_holder: 'Marcelo Rangel', exp_date: '11/29'},
       
    ]
  }

  
}
