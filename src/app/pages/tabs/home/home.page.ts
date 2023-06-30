import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper; 
  
  // featureConfig: SwiperOptions;
  features: any [] = [];
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
    this.features = [
      {id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send'},
      {id: 2, color: 'white', icon: 'send', name: 'Request'},
      {id: 3, color: 'success', icon: 'add-circle', name: 'Top-up'},
      {id: 4, color: 'light', icon: 'newspaper', name: 'Bills'},
      {id: 5, color: 'warning', icon: 'card', name: 'Cards'},
    
    ]
  }

  // ngAfterContentChecked(){
  //   this.featureConfig = 
  // }
}
