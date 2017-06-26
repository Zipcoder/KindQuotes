import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewQuoteService } from './new-quoteService';

/**
 * Generated class for the NewQuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-quote',
  templateUrl: 'new-quote.html',
  providers: [NewQuoteService]
})
export class NewQuotePage {

  quote: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public newQuoteService: NewQuoteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewQuotePage');
  }

  postNewQuote() {
    this.newQuoteService.addQuote(this.quote)
    .subscribe((data) => {
      console.log(data);
    })
  }

}
