import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';

@Component({
  selector: 'app-initialstepper',
  templateUrl: './initialstepper.component.html',
  styleUrls: ['./initialstepper.component.scss']
})
export class InitialstepperComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
