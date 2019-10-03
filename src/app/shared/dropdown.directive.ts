import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('click') onHostClick(): void {
    this.toggleIsOpen();
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
