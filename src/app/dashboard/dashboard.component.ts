import { Component, OnInit } from '@angular/core';

import { BankAccount } from 'app/core/models/bank-account';
import { DataService } from 'app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public accounts: BankAccount[];

  constructor(private dataService: DataService) {
    this.accounts = [];
   }

  ngOnInit() {
    this.getAccountInformation();

    setTimeout(() => {
      console.log(this.accounts);
    }, 1000);
  }

  public getAccountInformation(): void {
    this.dataService.fetchAccountBalance()
      .subscribe(account => this.accounts.push(account));
  }

}
