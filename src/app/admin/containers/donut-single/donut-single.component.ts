import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
   <div>
    <app-donut-form (create)="onCreate($event)"></app-donut-form>
  </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit{

  contructor() {}

  ngOnInit(): void {}

  onCreate(donut: Donut){
    console.log('onCreate', donut);
  }
}
