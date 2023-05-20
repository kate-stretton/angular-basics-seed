import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
   <div>
    <app-donut-form [donut]="donut" (create)="onCreate($event)"></app-donut-form>
  </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit{
  donut!: Donut;
  
  constructor() {}

  ngOnInit(): void {
    this.donut = {
      id: 'kl30a8',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 159,
      description: 'For the sour advocate.',
    }
  }

  onCreate(donut: Donut){
    console.log('onCreate', donut);
  }
}
