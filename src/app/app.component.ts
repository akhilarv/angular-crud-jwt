import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatTableDataSource} from '@angular/material/table';

import { AuthenticationService } from './services';
import { User } from './models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

   
}