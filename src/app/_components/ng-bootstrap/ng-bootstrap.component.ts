import { Component, OnInit, Input } from '@angular/core';
import { NgbModule,NgbDateStruct,NgbCalendar,NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.less'],
  providers: [NgbPopoverConfig]
})
export class NgBootstrapComponent{

  model: NgbDateStruct;
  successMessage= '';
  collapsed = true;
  public isCollapsed = false;
  show = false;
  autohide = true;

  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar,config: NgbPopoverConfig) {
    config.placement = 'right';
    config.triggers = 'hover';
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  showAlert()
  {
    this.successMessage = 'Ngb alert successfully created';
  }
}
