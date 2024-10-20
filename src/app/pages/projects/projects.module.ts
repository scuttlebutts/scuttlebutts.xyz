import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BouncingBallComponent } from './bouncing-ball/bouncing-ball.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        BouncingBallComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ProjectsModule { }
