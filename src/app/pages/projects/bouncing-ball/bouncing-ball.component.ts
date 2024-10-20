import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.scss']
})
export class BouncingBallComponent {
  @ViewChild('myBaby')
  canvas!: ElementRef;

}
