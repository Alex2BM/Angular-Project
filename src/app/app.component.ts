import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,PersonTableComponent,EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  person0: Person ={
    givenName: 'Alexandros',
    surName: 'Michailovits',
    age: 29,
    email: 'alexandros_bm2@yahoo.com',
    address: 'Polyla 37'
  }
 person1: Person ={
    givenName: 'Danae',
    surName: 'Maratou',
    age: 24,
    email: 'dannom@gmail.gr',
    address: 'Marathonodromwn 102'
  }
 
  users: Person[]=[
    {
      givenName: 'Alexandros',
      surName: 'Michailovits',
      age: 29,
      email: 'alexandros_bm2@yahoo.com',
      address: 'Polyla 37'
    },
   {
      givenName: 'Danae',
      surName: 'Maratou',
      age: 24,
      email: 'dannom@gmail.gr',
      address: 'Marathonodromwn 102'
    },
    {
      givenName: 'Alexandra',
      surName: 'Michailovits',
      age: 22,
      email: 'alexandra_bm2@yahoo.com',
      address: 'Polyla 36'
    },
   {
      givenName: 'Dinos',
      surName: 'Maratos',
      age: 24,
      email: 'dan@gmail.gr',
      address: 'Marathonodromwn 100'
    },
    {
      givenName: 'Lina',
      surName: 'Michou',
      age: 20,
      email: 'alina34@yahoo.com',
      address: 'Pigiala 37'
    },
   {
      givenName: 'Devon',
      surName: 'Martinou',
      age: 32,
      email: 'dnom@hotmail.com',
      address: 'Bergsingel 92'
    },
    {
      givenName: 'Ilias',
      surName: 'Kazatzis',
      age: 30,
      email: 'kazatzis93@yahoo.com',
      address: 'thermaikoy 9'
    },
   {
      givenName: 'Danae',
      surName: 'Makou',
      age: 20,
      email: 'anom@gmail.gr',
      address: 'Xalepa 45'
    },
    {
      givenName: 'Alexandros',
      surName: 'Michailidis',
      age: 55,
      email: 'alexandros_@yahoo.gr',
      address: 'Polemi 21'
    },
   {
      givenName: 'Darion',
      surName: 'Makeliou',
      age: 19,
      email: 'DarM@gmail.gr',
      address: 'elpidos 55'
    }

  ]
}

