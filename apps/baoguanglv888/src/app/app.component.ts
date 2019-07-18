import { Component } from '@angular/core';
import Swiper from 'swiper';
export interface Img {
    src: string;
}
@Component({
    selector: 'com-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'baoguanglv888';

    shops: Img[] = [{
        src: './assets/shop/1.jpg'
    }, {
        src: './assets/shop/2.jpg'
    }, {
        src: './assets/shop/3.jpg'
    }, {
        src: './assets/shop/4.jpg'
    }, {
        src: './assets/shop/5.jpg'
    }];

    vis: Img[] = [{
        src: './assets/vi/1.jpg'
    }, {
        src: './assets/vi/2.jpg'
    }, {
        src: './assets/vi/3.jpg'
    }, {
        src: './assets/vi/4.jpg'
    }, {
        src: './assets/vi/5.jpg'
    }, {
        src: './assets/vi/6.jpg'
    }, {
        src: './assets/vi/7.jpg'
    }, {
        src: './assets/vi/8.jpg'
    }, {
        src: './assets/vi/9.jpg'
    }, {
        src: './assets/vi/10.jpg'
    }];

    packs: Img[] = [{
        src: './assets/pack/1.jpg'
    }, {
        src: './assets/pack/2.jpg'
    }, {
        src: './assets/pack/3.jpg'
    }, {
        src: './assets/pack/4.jpg'
    }, {
        src: './assets/pack/5.jpg'
    }, {
        src: './assets/pack/6.jpg'
    }, {
        src: './assets/pack/7.jpg'
    }]

    logos: Img[] = [{
        src: './assets/logo/1.jpg'
    }, {
        src: './assets/logo/2.jpg'
    }, {
        src: './assets/logo/3.jpg'
    }, {
        src: './assets/logo/4.jpg'
    }, {
        src: './assets/logo/5.jpg'
    }, {
        src: './assets/logo/6.jpg'
    }, {
        src: './assets/logo/7.jpg'
    }, {
        src: './assets/logo/8.jpg'
    }, {
        src: './assets/logo/9.jpg'
    }, {
        src: './assets/logo/10.jpg'
    }, {
        src: './assets/logo/11.jpg'
    }, {
        src: './assets/logo/12.jpg'
    }, {
        src: './assets/logo/13.jpg'
    }, {
        src: './assets/logo/14.jpg'
    }, {
        src: './assets/logo/15.jpg'
    }, {
        src: './assets/logo/16.jpg'
    }, {
        src: './assets/logo/17.jpg'
    }, {
        src: './assets/logo/18.jpg'
    }, {
        src: './assets/logo/19.jpg'
    }, {
        src: './assets/logo/20.jpg'
    }];

    ngOnInit(){
        var mySwiper = new Swiper('.swiper-container', {
            speed: 400,
            preloadImages: false,
            lazyLoading: true
          });   
    }
}
