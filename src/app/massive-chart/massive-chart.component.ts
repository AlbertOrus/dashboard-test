    import { Component } from '@angular/core';
     
    @Component({
      selector: 'massive-chart',
      templateUrl: './massive-chart.component.html'
    })
    export class MassiveChartComponent {
      // lineChart
      public data_vector : number[] = [];
      public size_x : number = 100;

      public lineChartData:Array<any> = [
        {data: this.data_vector, label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'},
        {data: [48, 88, 27, 59, 10, 47, 50], label: 'Series D'}
      ]; 
      public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      public lineChartOptions:any = {
        responsive: true
      };
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
            this.lineChartData[j].data[i] = i*5+(Math.random()*100)*j;
            if(i%5 == 0){
              this.lineChartLabels[i] = i;
            }
            else{
              this.lineChartLabels[i] = '';
            }
          }
          }
      }



     /* public randomize():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
          _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
          for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
          }
        }
        this.lineChartData = _lineChartData;
      }*/

      public validar():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
          _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
          for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = this.lineChartData[i].data[j];
          }
        }
        this.lineChartData = _lineChartData;
      }

      /*public num(num,pos: number):void {
        this.lineChartData[num].data[pos];

      }*/
     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }
    }