import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [SideNavBarComponent],
    exports: [SideNavBarComponent],
    imports: [
        AppRoutingModule,
        NgbCollapseModule,
        CommonModule,
        SharedModule
    ]
})
export class CoreModule { }
