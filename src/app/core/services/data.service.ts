import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { BankAccount } from 'app/core/models/bank-account';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public fetchAccountBalance(): Observable<BankAccount> {
    return this.http.get(`http://localhost:8080/accounts/570e4c25-4872-4d54-84ad-0df137a9985d/balance`)
      .map((res: Response) => res.json());
  }

}
