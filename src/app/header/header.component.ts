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

  changeRoute(routeName: string, event: Event) {
    event.preventDefault();
    this.routeChangeEmitter.emit(routeName);
  }
}
