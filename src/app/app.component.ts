import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            PersonTableComponent,
            EventBindingComponent, 
            RouterLink, RouterOutlet,
            ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 
  person0={
  givenName: "Jhon",
 surName: "Doou",
   age: 34,
   email: "ghonD_2@hot-mail.com",
   address : "Collins 35, LA"
 }
 person1 = {
  givenName: "Jhonny",
   surName: "Depp",
   age: 53,
   email: "JackSparrow_76@gmail.com",
   address : "Gallaghervil 465c, New York"
 }
 person2 = {
  givenName: "Alexandros",
  surName: "Michailovits",
  age: 29,
  email: "alexandros_bm2@yahoo.com",
  address : "Bergsingel 96a, Rotterdam"
 }
 person3 = {
  givenName: "Alexandra",
  surName: "Milevovits",
  age: 17,
  email: "alexandra07@yahoo.com",
  address : "Polemi 12"
 }
 



}
