import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgBootstrapComponent } from './ng-bootstrap.component';


@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule,NgbModule],
  declarations: [NgBootstrapComponent],
  exports: [NgBootstrapComponent],
  bootstrap: [NgBootstrapComponent]
})
export class NgBootstrapModule {}
