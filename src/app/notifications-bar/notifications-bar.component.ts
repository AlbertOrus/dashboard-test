import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-bar',
  templateUrl: './notifications-bar.component.html',
  styleUrls: ['./notifications-bar.component.css']
})
export class NotificationsBarComponent implements OnInit {
  
  public incidencies: number = Math.round(Math.random()*10);
  public visites: number = Math.round(Math.random()*40);
  public temps_resposta : string = Number(Math.random()*2).toFixed(2);
  public notificacions : number = Math.round(Math.random()*20);

  constructor() { }

  ngOnInit() {
  }

}
