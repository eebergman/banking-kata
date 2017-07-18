import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { BankAccount } from 'app/core/models/bank-account';

@Injectable()
export class DataService {
  private accountNumber = '570e4c25-4872-4d54-84ad-0df137a9985d';

  constructor(private http: Http) { }

  public fetchAccountBalance(): Observable<BankAccount> {
    return this.http.get(`http://localhost:8080/accounts/${this.accountNumber}/balance`)
      .map((res: Response) => res.json());
  }

  public newAccount(): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('method', 'post');
    urlSearchParams.append('amount', '30.00');
    urlSearchParams.append('currency', 'USD');

    return this.http.post(`http://localhost:8080/accounts`, urlSearchParams.toString, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

