import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayListComponent } from './birthday-list.component';

const routes: Routes = [
    {
        path: '', component: BirthdayListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdayListRoutingModule { }
