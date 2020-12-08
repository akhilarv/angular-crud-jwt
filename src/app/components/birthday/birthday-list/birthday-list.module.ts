import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthdayListRoutingModule } from './birthday-list-routing.module';
import { BirthdayListComponent } from './birthday-list.component';
import { BirthdayService } from '../../../services/birthday.service';

@NgModule({
  imports: [
    CommonModule,
    BirthdayListRoutingModule
  ],
  declarations: [BirthdayListComponent],
  providers: [
    BirthdayService
  ]
})
export class BirthdayListModule { }
