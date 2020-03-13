import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {SiteFooterComponent} from './components/site-footer/site-footer.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [SiteHeaderComponent, SiteFooterComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [SiteHeaderComponent, SiteFooterComponent]
})
export class SharedModule { }
