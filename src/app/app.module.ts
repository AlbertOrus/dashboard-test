import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'; 
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';
import { MassiveChartComponent } from './massive-chart/massive-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    LineChartDemoComponent,
    MassiveChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
