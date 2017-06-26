import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {HomeService} from './homeService';
import {Http} from '@angular/http';

import { NewQuotePage } from '../new-quote/new-quote';
import { QuoteDetailPage } from '../quote-detail/quote-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {

  quotes: any;
   
  constructor(public navCtrl: NavController, 
              public homeService:HomeService) {
    homeService.getAllQuotes().subscribe(data => {
      this.quotes = data;
    })
  }

  navigateToNewQuotePage() {
    this.navCtrl.push(NewQuotePage);
  }

  navigateToDetailPage(id: number) {
    this.navCtrl.push(QuoteDetailPage, {id: id});
  }
}
