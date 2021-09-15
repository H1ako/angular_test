import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model!: string;
  speed!: number;
  colors!: Colors;
  spisok!: any[];
  constructor() { }

  ngOnInit(): void {
    this.model = 'Hallo za world';
    this.speed = 40;
    this.colors = {
      salon: 'black',
      car: 'red'
    }
  }


}

interface Colors{
  salon: string,
  car: string
}
