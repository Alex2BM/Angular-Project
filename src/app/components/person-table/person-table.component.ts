import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Alexandros';
  person = {
    givenName: 'Alexandros',
    surName: 'Michailovits',
    age: 29,
    email: 'alexandros_bm2@yahoo.com'
  }
}
