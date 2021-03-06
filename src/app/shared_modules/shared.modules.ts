import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports:[
        CommonModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ],
    bootstrap: []
})
export class SharedModules { }