import { Country } from './../classes/country';
import { Person } from './../classes/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  person: Person;
  country: Country[];

  constructor() { 
    this.person = new Person();
    this.country = [
      {id: 1, nombre:'Spain'},
      {id: 2, nombre:'France'},
      {id: 3, nombre:'Italia'},
      {id: 4, nombre:'Germany'},
      {id: 5, nombre:'United Kindom'}
    ];
  }

  onSubmitForm(value: any):void{
    console.log(value);
  }

  ngOnInit(): void {
  }

}
