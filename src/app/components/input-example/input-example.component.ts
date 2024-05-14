import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css'
})
export class InputExampleComponent {
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

}
