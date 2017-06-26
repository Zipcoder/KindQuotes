import{Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Injectable()
export class HomeService{
    constructor(private _http:Http, private alertCtrl:AlertController) {

    }

    getAllQuotes() : Observable<any> {
        return this._http.get("http://localhost:8080/quotes/")
            .map(response => response.json());
    }

    postQuote(body: any) {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:8080/quotes/", bodyString, options)
            .map((response: Response) => response.json())
            .subscribe();
    }

    invalidInputAlert() {
        let alert = this.alertCtrl.create({
            title: 'Invalid Input!',
            subTitle: 'Your quote must include "Wu Tang Clan" ',
            buttons: ['OK']
        });
        alert.present();
    }

}