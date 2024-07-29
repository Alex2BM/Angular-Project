import { Component } from '@angular/core';
import { SimpleDataDisplayComponent } from '../simple-data-display/simple-data-display.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDataDisplayComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
manyperson = ManyPerson;
}
