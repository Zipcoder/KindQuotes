import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {HomeService} from './homeService';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {

  quotes: any;
   
  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public homeService:HomeService) {
    homeService.getAllQuotes().subscribe(data =>{
      this.quotes = data;
    })
  }

   openModal() {
   let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
   profileModal.present();
 }
}

@Component()
