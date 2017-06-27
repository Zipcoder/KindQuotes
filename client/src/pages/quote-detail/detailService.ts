import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class DetailService{
    constructor(private _http:Http){

    }

    getQuote(id: number) : Observable<any> {
        return this._http.get("http://localhost:8080/quotes/" + id)
            .map(response => response.json());
    }

    deleteQuote(id: number): Observable<any> {
        return this._http.delete("http://localhost:8080/quotes/" + id)
            .map(response => console.log(response));
    }

    updateQuote(quote: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(quote)
        return this._http.put("http://localhost:8080/quotes/" + quote.id, quote, options)
            .map(response => response.json())
    }
        
}