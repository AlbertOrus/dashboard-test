import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent implements OnInit {

  private bad_latency = 30;
  private normal_latency = 60;
  private good_latency = 90;
  public error: string = "https://img.icons8.com/color/45/000000/delete-sign.png";
  public ok: string = "https://img.icons8.com/color/45/000000/checkmark.png";
  public warning: string = "https://img.icons8.com/color/45/000000/error.png";
  //public bat: string = "https://img.icons8.com/color/45/000000/batman-old.png";
  public salida: string = "";

  public hospitals: any[] = [
    { nom: 'GXX', estat: '', latencia: this.getLatency(), n_visites: 38, class: "" },
    { nom: 'BVX', estat: '', latencia: this.getLatency(), n_visites: 54, class: "" },
    { nom: 'HBB', estat: '', latencia: this.getLatency(), n_visites: 70, class: "" },
    { nom: 'THN', estat: '', latencia: this.getLatency(), n_visites: 30, class: "" }
  ]

  private getLatency(): String {
    return Number(Math.random() * 100).toFixed(2);
  }

  public getHospitals(): String {
    return '';
  }

  constructor() { }

  ngOnInit() {
    for (let hospital of this.hospitals) {
      if (hospital.latencia < this.bad_latency) {
        hospital.estat = "Lent";

      } else if (hospital.latencia > this.bad_latency && hospital.latencia < this.good_latency) {
        hospital.estat = "Normal";

      } else {
        hospital.estat = "Rapid";

      }

    }
  }

  public alerta(e: string): string {
    if (e == "Rapid") {
      this.salida = this.ok;
    } else if (e == "Lent") {
      this.salida = this.error;
    } else {
      this.salida = this.warning;
    }
    return this.salida;
  }


  
}