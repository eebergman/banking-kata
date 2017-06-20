import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { BankAccount } from 'app/core/models/bank-account';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public fetchAccountBalance(): Observable<BankAccount> {
    return this.http.get(`http://localhost:8080/accounts/3e750c83-ec7d-42f2-85e1-314512ad5eff/balance`)
      .map((res: Response) => res.json());
  }

}
