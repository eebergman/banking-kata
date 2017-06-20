import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDataComponent } from './account-data.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
  ],
  declarations: [AccountDataComponent]
})
export class AccountModule { }
