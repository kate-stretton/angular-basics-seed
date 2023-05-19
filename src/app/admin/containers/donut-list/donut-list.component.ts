import { Component, OnInit} from '@angular/core';

import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
  <div>
    <app-donut-card [donut]="donuts[0]"></app-donut-card>
    <app-donut-card [donut]="donuts[1]"></app-donut-card>
    <app-donut-card [donut]="donuts[2]"></app-donut-card>
  </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: Donut; 
  donuts!: Donut[];

  constructor(){}

  ngOnInit(): void {
    this.donuts = [
      {id: '1f1e2t',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 5,
      description: 'For the pure chocoholic'
      },
      {id: '13g98d',
      name: 'Glazed fudge',
      icon: 'glazed-fudge',
      price: 5,
      description: 'Glazed fudge'
      },
      {id: '3kd98s',
      name: 'Caramel swirl',
      icon: 'caramel-swirl',
      price: 5,
      description: 'Caramel swirl'
      } 
    ];

    this.donut = this.donuts[1];
  }
}
