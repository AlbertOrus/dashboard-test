import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent implements OnInit {
  
  private bad_latency = 100;
  private normal_latency = 50;

  public hospitals: any[] = [
  {nom: 'GXX', estat: '', latencia: this.getLatency(), n_visites: 38, class: ""},
  {nom: 'BVX', estat: '', latencia: this.getLatency(), n_visites: 54, class: ""},
  {nom: 'HBB', estat: '', latencia: this.getLatency(), n_visites: 70, class: ""},
  {nom: 'THN', estat: '', latencia: this.getLatency(), n_visites: 30, class: ""}
  ]

  private getLatency():String{
  	return Number(Math.random()*100).toFixed(2);
  }

  public getHospitals():String{
  	return '';
  }

  constructor() { }

  ngOnInit() {
  	for (let hospital of this.hospitals) {
  		if(hospital.latencia > this.bad_latency){
  			hospital.estat = "Lent";

  			
  		}else if(hospital.latencia > this.normal_latency){
  			hospital.estat ="Normal";
  			
  		}
  		else{
  			hospital.estat ="Rapid";
  			
  		}

  		
  	}
  }
  

}
