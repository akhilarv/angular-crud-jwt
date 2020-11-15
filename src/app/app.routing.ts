import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';

import { HomeComponent } from './_components/home';
import { LoginComponent } from './_components/login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {
        path: 'todo-list',
        loadChildren: () => import('./_components/todo/todo-list/todo-list.module').then(mod => mod.TodoListModule)
    },
    {
        path: 'todo-detail',
        loadChildren: () => import('./_components/todo/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
    },
    {
        path: 'birthday-list',
        loadChildren: () => import('./_components/birthday/birthday-list/birthday-list.module').then(mod => mod.BirthdayListModule)
    },
    {
        path: 'birthday-detail',
        loadChildren: () => import('./_components/birthday/birthday-detail/birthday-detail.module').then(mod => mod.BirthdayDetailModule)
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);