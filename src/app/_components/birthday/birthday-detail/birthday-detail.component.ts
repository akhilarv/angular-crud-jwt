import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BirthdayService } from '../../../_services/birthday.service';
import { Birthday } from '../../../_models/birthday';

@Component({
  selector: 'app-birthday-detail',
  templateUrl: './birthday-detail.component.html',
  styleUrls: ['./birthday-detail.component.scss']
})
export class BirthdayDetailComponent implements OnInit {

  public birthdayId: string;
  public birthdayDetail = <Birthday>{};
  public mode: string;    
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private birthdayService: BirthdayService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.birthdayId = params['id'];
          if (this.birthdayId !== undefined) {
                console.log(this.birthdayId);
                this.getBirthdayDetailById(this.birthdayId);
                this.mode = 'Edit';    
          } else {
                // this.birthdayId = null;
                console.log(this.birthdayId);
                this.birthdayDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  getBirthdayDetailById(id) {
    this.birthdayService.getBirthdayById(parseInt(id))
    .subscribe(res => {
        this.birthdayDetail  = res['data'];console.log(this.birthdayDetail);
      });
  }
  
  onBirthdaySubmitForm(form) {
    if(form.valid) {
        this.birthdayService.updateBirthdayById(this.birthdayDetail)
        .subscribe(
          res => {
        this.router.navigate(['/birthday-list']);
          });
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/birthday-list']);
  }

}
