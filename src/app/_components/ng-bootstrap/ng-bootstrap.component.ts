import { Component, OnInit, Input } from '@angular/core';
import { NgbModule,NgbDateStruct,NgbCalendar,NgbPopoverConfig,NgbModalConfig, NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.less'],
  providers: [NgbPopoverConfig,NgbModalConfig, NgbModal]
})
export class NgBootstrapComponent{

  model: NgbDateStruct;
  successMessage= '';
  collapsed = true;
  show = false;
  autohide = true;

  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar,config: NgbPopoverConfig,
    configModal: NgbModalConfig, private modalService: NgbModal) {
      config.placement = 'right';
      config.triggers = 'hover';

      configModal.backdrop = 'static';
      configModal.keyboard = false;
  }
  openModal(content) {
    this.modalService.open(content);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  showAlert()
  {
    this.successMessage = 'Ngb alert successfully created';
  }
}
