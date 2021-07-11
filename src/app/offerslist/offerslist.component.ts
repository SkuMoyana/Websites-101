import { Component, OnInit } from '@angular/core';


export interface Value{
  name : string,
  description : string
}

@Component({
  selector: 'app-offerslist',
  templateUrl: './offerslist.component.html',
  styleUrls: ['./offerslist.component.scss']
})
export class OfferslistComponent implements OnInit {

  constructor() { }

listValues : Value[] = [
{name : "product1", description : "Our first product"},
{name : "product2", description : "Our two product"},
{name : "product3", description : "Our third product"}
]

  ngOnInit(): void {
  }

}
