    import { Component } from '@angular/core';
     
    @Component({
      selector: 'massive-chart',
      templateUrl: './massive-chart.component.html'
    })
    export class MassiveChartComponent {

      public size_x : number = 400;
      public x_label_rate : number = 10
      
      // lineChart
      public lineChartData:Array<any> = [
        {data: [], label: 'Series A',pointRadius: 0, borderWidth: 1},
        {data: [], label: 'Series B',pointRadius: 0, borderWidth: 1},
        {data: [], label: 'Series C',pointRadius: 0, borderWidth: 1},
        {data: [], label: 'Series D',pointRadius: 0, borderWidth: 1}
      ]; 
      public lineChartLabels:Array<any> = [];
      public lineChartOptions:any = [{
        responsive: true,
      }];
      public lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // red
          backgroundColor: 'rgba(255,160,122,0.2)',
          borderColor: 'rgba(255,160,122,1)',
          pointBackgroundColor: 'rgba(255,160,122,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,160,122,0.8)'
        }
      ];
      
      public lineChartLegend:boolean = true;
      public lineChartType:string = 'line';
      
      ngOnInit(){

        let n_data : number = this.lineChartData.length;
        this.lineChartLabels = []
        for (let j=0; j<n_data; j++){
          for (let i = 0; i<this.size_x; i++){
            if(i == 0){
              this.lineChartData[j].data[i] = Math.random()*100
            }
            else{
              this.lineChartData[j].data[i] = Math.abs(this.lineChartData[j].data[i-1]+(Math.random()*10)-Math.random()*10);
            }
            if(i%(20) == 0){
              this.lineChartLabels[i] = i;
            }
            else{
              this.lineChartLabels[i] = '';
            }
          }
          }
      }

     
      // events
      public chartClicked(e:any):void {

      }
     
      public chartHovered(e:any):void {

      }
    }