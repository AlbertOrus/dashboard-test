import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent implements OnInit {
  
  public hospitals: any[] = [
  {nom: 'GXX', estat: 'Correcte', latencia: 30, n_visites: 38},
  {nom: 'BVX', estat: 'Lent', latencia: 200, n_visites: 54},
  {nom: 'HBB', estat: 'Correcte', latencia: 45, n_visites: 70},
  {nom: 'THN', estat: 'Correcte', latencia: 60, n_visites: 30}
  ]


  public getHospitals():String{
  	return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
