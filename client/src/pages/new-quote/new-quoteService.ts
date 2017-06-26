import{ Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class NewQuoteService {
    constructor(private _http: Http) {

    }

    buildMessage(quote: string): JSON {
        let q = {};
        q['message'] = quote;
        console.log(quote)
        console.log(q)
        return JSON.parse(JSON.stringify(q));
    }

    addQuote(quote: string) : Observable<any> {
        let quoteToJson = this.buildMessage(quote);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:8080/quotes/newQuote/", quoteToJson, options);
    }

}