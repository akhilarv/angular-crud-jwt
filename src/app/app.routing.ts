import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { NgBootstrapComponent } from './components/ng-bootstrap/ng-bootstrap.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'ng-bootstrap', component: NgBootstrapComponent },
    {
        path: 'todo-list',
        loadChildren: () => import('./components/todo/todo-list/todo-list.module').then(mod => mod.TodoListModule)
    },
    {
        path: 'todo-detail',
        loadChildren: () => import('./components/todo/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
    },
    {
        path: 'birthday-list',
        loadChildren: () => import('./components/birthday/birthday-list/birthday-list.module').then(mod => mod.BirthdayListModule)
    },
    {
        path: 'birthday-detail',
        loadChildren: () => import('./components/birthday/birthday-detail/birthday-detail.module').then(mod => mod.BirthdayDetailModule)
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);