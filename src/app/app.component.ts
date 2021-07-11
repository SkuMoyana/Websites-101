import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import {  Input } from '@angular/core';

export interface Value{
  name : string,
  description : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  
  listValues : Value[] = [
    {name : "product1", description : "Our first product"},
    {name : "product2", description : "Our two product"},
    {name : "product3", description : "Our third product"}
    ]
  private stepper: Stepper;

  @Input() name: string = 'Angular';

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    })
  }
}