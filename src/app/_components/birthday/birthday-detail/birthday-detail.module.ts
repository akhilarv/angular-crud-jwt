import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BirthdayDetailRoutingModule } from './birthday-detail-routing.module';
import { BirthdayDetailComponent } from './birthday-detail.component';
import { BirthdayService } from '../../../_services/birthday.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BirthdayDetailRoutingModule
  ],
  declarations: [BirthdayDetailComponent],
  providers: [
    BirthdayService
  ]
})
export class BirthdayDetailModule { }
