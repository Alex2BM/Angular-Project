import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Alexandros';
  person = {
    givenName: 'Alexandros',
    surName: 'Michailovits',
    age: 29,
    email: 'alexandros_bm2@yahoo.com'
  }
}

