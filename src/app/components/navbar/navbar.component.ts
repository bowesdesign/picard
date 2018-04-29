import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Input() pageTitle: string;
  @Input() showBackBtn: boolean;
  @Output() backClicked = new EventEmitter<any>();
}
