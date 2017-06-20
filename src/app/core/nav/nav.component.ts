import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public onAccountPage: boolean;

  constructor(private router: Router) {
    this.onAccountPage = false;
  }

  ngOnInit() {
  }

  private showLogout() {
    if (this.router.url === 'account') {
      this.onAccountPage = true;
    }
  }

}
