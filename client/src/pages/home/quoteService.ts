import{Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Injectable()
export class QuoteService{

    private quoteID;

    constructor(private _http:Http, private actionSheetCtrl:ActionSheetController) {
    }

        presentActionSheet() {
            let actionSheet = this.actionSheetCtrl.create({
                title: 'Modify your album',
                buttons: [
                    {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },  {
                    text: 'Edit',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },  {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
                    ]
            });
            actionSheet.present();
        }

    // putQuote(body: any) {
    //     let bodyString = JSON.stringify(body);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.put("http://localhost:8080/quotes/", bodyString, options)
    //         .map((response: Response) => response.json())
    //         .subscribe();
    // }

    // invalidInputAlert() {
    //     let alert = this.alertCtrl.create({
    //         title: 'Invalid Input!',
    //         subTitle: 'Your quote must include "Wu Tang Clan" ',
    //         buttons: ['OK']
    //     });
    //     alert.present();
    // }

}