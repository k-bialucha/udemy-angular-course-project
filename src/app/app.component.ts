import { Component } from '@angular/core';

const routes: string[] = ['recipes', 'shopping-list'];

const DEFAULT_ROUTE = routes[0];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-udemy-course-project';
  route: string = DEFAULT_ROUTE;

  changeRoute(routeName: string): void {
    this.route = routeName;
  }
}
