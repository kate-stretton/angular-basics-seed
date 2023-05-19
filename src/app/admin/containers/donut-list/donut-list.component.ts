import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
  <div>
    <div>{{donut.name }}</div>
    <div>{{donut.price }}</div>
  </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: any; 
  donuts!: any[];

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
      name: 'Lemon',
      icon: 'lemon',
      price: 5,
      description: 'Lemonade'
      },
      {id: '3kd98s',
      name: 'Raspberry',
      icon: 'raspberry',
      price: 5,
      description: 'Raspberry donut'
      } 
    ];

    this.donut = this.donuts[0];
  }
}
