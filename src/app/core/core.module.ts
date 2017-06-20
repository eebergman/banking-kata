import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MaterialModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
