import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './homeService';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { QuoteService } from './quoteService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService, QuoteService]
})
export class HomePage {

  private addedQuote: FormGroup;
  quotes: any;
   
  constructor(public navCtrl: NavController,
              public homeService:HomeService,
              public _form: FormBuilder,
              public _quoteService: QuoteService) {

    homeService.getAllQuotes().subscribe(data =>{
      this.quotes = data;
    })
  }

  ngOnInit() {
    this.addedQuote = this._form.group ({
        quote: ['', Validators.pattern(/Wu Tang Clan/)],
    });
  }

  parseForm(aForm: Object): Object {
    return aForm["quote"];
  }

  addQuote() {
    if (this.addedQuote.valid) {
      let quoteObject = this.parseForm(this.addedQuote.getRawValue());
      console.log(quoteObject);
      this.homeService.postQuote(quoteObject);
      window.location.reload();
    }
    else {
      this.homeService.invalidInputAlert();
    }
  }

  goToEditSheet() {
    this._quoteService.presentActionSheet();
  }

  



}
