import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailService } from './detailService';
import { HomePage } from '../home/home';

/**
 * Generated class for the QuoteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-quote-detail',
  templateUrl: 'quote-detail.html',
  providers: [DetailService]
})
export class QuoteDetailPage {

  quote: any = "";
  updating: Boolean = false;
  updated: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public detailService: DetailService) {
    this.detailService.getQuote(this.navParams.data.id)
    .subscribe(data => {
      console.log(data)
      this.quote = data;
    })
  }

  deleteQuote() {
    this.detailService.deleteQuote(this.quote.id)
    .subscribe(res => {
      this.navCtrl.push(HomePage);
    })
  }

  update() {
    this.updating = true;
  }

  updateQuote() {
    this.quote.message = this.updated;
    this.updating = false;
    this.detailService.updateQuote(this.quote)
    .subscribe(data => {
      this.quote = data;
    })
  }

  ionViewDidLoad() {

  }

}
