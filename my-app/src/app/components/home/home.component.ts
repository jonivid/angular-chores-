import { Component, OnInit } from '@angular/core';
import Vacation from 'src/app/models/Vacation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public destinationName: string = '';
  public vacationPrice: number = 0;
  public filterByChkBox: boolean = true;
  public vacations: Vacation[] = [
    { destination: 'Italy', price: 10 },
    { destination: 'France', price: 20 },
    { destination: 'Spain', price: 30 },
    { destination: 'Israel', price: 50 },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.destinationName);
  }
  changeChkBox(){
    this.filterByChkBox=!this.filterByChkBox
  }
}
