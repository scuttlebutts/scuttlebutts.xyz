import { Component } from '@angular/core';
import { NavLocation } from './interfaces/nav-location.interface';
import { EMPTY, Observable, Subject, debounceTime, delayWhen, fromEvent, map, of, startWith, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {
  
  readonly destinations: NavLocation[] = [
    {
      id: 1,
      location: '/home',
      displayName: 'Home',
      iconPath: 'assets/icons/home.svg'
    },
    {
      id: 2,
      location: '/about',
      displayName: 'About',
      iconPath: 'assets/icons/about.svg'
    },
    {
      id: 3,
      location: '/projects',
      displayName: 'Projects',
      iconPath: 'assets/icons/projects.svg'
    }
  ];

  private autoCollapseDelay = 750;
  private readonly destroy$ = new Subject<void>();

  isCollapsed$: Observable<boolean> = fromEvent(document, 'mousemove').pipe(
    map((event) => event as MouseEvent),
    startWith({pageX: 0} as MouseEvent),
    takeUntil(this.destroy$),
    debounceTime(50),
    map((mouse: MouseEvent) => {
      //console.log(mouse.pageX);
      return !(mouse.pageX < 100);
    })
  );
  
  ngOnDestroy() {
    this.destroy$.next();
  }
}
