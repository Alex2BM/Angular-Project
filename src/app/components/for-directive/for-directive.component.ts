import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive.component.html',
  styleUrl: './for-directive.component.css'
})
export class ForDirectiveComponent {
  users: Person[] = [
    {
      givenName: "Jhon",
     surName: "Doou",
       age: 34,
       email: "ghonD_2@hot-mail.com",
       address : "Collins 35, LA"
     },
     {
      givenName: "Jhonny",
       surName: "Depp",
       age: 53,
       email: "JackSparrow_76@gmail.com",
       address : "Gallaghervil 465c, New York"
     },
     {
      givenName: "Alexandros",
      surName: "Michailovits",
      age: 29,
      email: "alexandros_bm2@yahoo.com",
      address : "Bergsingel 96a, Rotterdam"
     },
     {
      givenName: "Alexandra",
      surName: "Milevovits",
      age: 17,
      email: "alexandra07@yahoo.com",
      address : "Polemi 12"
     }
   ]
}
