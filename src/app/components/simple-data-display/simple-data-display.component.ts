import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import {sortBy} from 'lodash-es';

@Component({
  selector: 'app-simple-data-display',
  standalone: true,
  imports: [],
  templateUrl: './simple-data-display.component.html',
  styleUrl: './simple-data-display.component.css'
})
export class SimpleDataDisplayComponent {
@Input() data: EPerson[];

sortOrder = {
  givenName: 'none',
  surName: 'none',
  age: 'none',
  email: 'none',
  education: 'none'
}

sortData(sortKey: string){
  if(this.sortOrder[sortKey] ==='asc'){
       this.sortOrder[sortKey] ='desc';
       this.data = sortBy(this.data, sortKey).reverse();  
      }else{
        this.sortOrder[sortKey] ='asc';
       this.data = sortBy(this.data, sortKey);
      }
}
}
