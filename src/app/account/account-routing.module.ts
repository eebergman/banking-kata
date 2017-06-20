import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDataComponent } from 'app/account/account-data.component';

const routes: Routes = [
  { path: '', component: AccountDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
