import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-input',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input.component.html',
  styleUrl: './component-input.component.css'
})
export class ComponentInputComponent {

  person0 : Person={
    givenName: "Jhon",
   surName: "Doou",
     age: 34,
     email: "ghonD_2@hot-mail.com",
     address : "Collins 35, LA"
   }
   person1 : Person = {
    givenName: "Jhonny",
     surName: "Depp",
     age: 53,
     email: "JackSparrow_76@gmail.com",
     address : "Gallaghervil 465c, New York"
   }
   person2 : Person= {
    givenName: "Alexandros",
    surName: "Michailovits",
    age: 29,
    email: "alexandros_bm2@yahoo.com",
    address : "Bergsingel 96a, Rotterdam"
   }
   person3 : Person= {
    givenName: "Alexandra",
    surName: "Milevovits",
    age: 17,
    email: "alexandra07@yahoo.com",
    address : "Polemi 12"
   }
}
