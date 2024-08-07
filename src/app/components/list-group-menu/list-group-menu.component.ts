import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-iten';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
menu: MenuItem[] = [
  {text: 'Component Input', routerLink: 'component-input'},
  {text: '@for Directive Example', routerLink: 'for-directive-example'},
  {text: 'Event Bind Example', routerLink: 'event-bind-example'},
  {text:'Simple Dtatable Example', routerLink:'simple-datatable-example'}
];
}
