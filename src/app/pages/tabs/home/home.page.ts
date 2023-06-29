import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper; 
  
  accounts: any [] = [];

  constructor() { }
  
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any){
      console.log('changed: ', e)
  }

  ngOnInit() {
    this.accounts = [
      {id: 1, acc_no: '57868945098', balance: '200000'},
      {id: 2, acc_no: '20067091201', balance: '50000'},
      {id: 3, acc_no: '40163081205', balance: '80000'},
   
    ];
  }


}
