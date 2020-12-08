import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Birthday } from '../../../models/birthday';
import { BirthdayService } from '../../../services/birthday.service';

@Component({
    selector: 'app-birthday-list',
    templateUrl: './birthday-list.component.html',
    styleUrls: ['./birthday-list.component.scss']
})
export class BirthdayListComponent implements OnInit {
    public birthdays: any = [];
    constructor( private router: Router, private birthdayService: BirthdayService ) { }
    
    ngOnInit() {
        this.loadAllBirthdayList();    
    }
    
    loadAllBirthdayList() {
        this.birthdayService.getAllBirthdays().subscribe(
            res => {
                this.birthdays = res['data'];
            }
        );
    }
    
    onClickEditBirthdayDetail(id) {
        this.router.navigate(['/birthday-detail'], {queryParams: {id: id}});
    }
    
    onClickAddBirthday() {
        this.router.navigate(['/birthday-detail']);
    }
    
    onClickBirthdayDelete(id) {
        this.birthdayService.deleteBirthdayDetail(id)
        .subscribe(
            res => {
            this.loadAllBirthdayList();
            });
    }

}
