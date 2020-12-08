import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayDetailComponent } from './birthday-detail.component';

const routes: Routes = [
    {
        path: '', component: BirthdayDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdayDetailRoutingModule { }
