import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeCanvasComponent } from './components/three-canvas/three-canvas.component';



@NgModule({
  declarations: [ThreeCanvasComponent],
  imports: [
    CommonModule
  ],
  exports: [ThreeCanvasComponent]
})
export class SharedModule { }
