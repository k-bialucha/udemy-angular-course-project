import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() currentRoute: string;
  @Output('routeChanged') routeChangeEmitter: EventEmitter<
    string
  > = new EventEmitter();

  changeRoute(event: Event) {
    event.preventDefault();

    const routeName = (<HTMLElement>event.target).id;
    this.routeChangeEmitter.emit(routeName);
  }
}
