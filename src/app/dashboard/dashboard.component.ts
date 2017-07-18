import { Component, OnInit } from '@angular/core';

import { BankAccount } from 'app/core/models/bank-account';
import { DataService } from 'app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private makeNewAccount: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  public createAccount(): void {
    this.dataService.newAccount()
    .subscribe(data => this.createAccount = data);
  }
}
