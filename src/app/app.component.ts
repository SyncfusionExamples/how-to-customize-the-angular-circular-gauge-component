import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CircularGaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public cap?: Object = { radius: 15 };
  public needleStartWidth?: Number = 10;
  public needleEndWidth?: Number= 5;
  public labelStyle?: Object = {
    autoAngle : true,
    format: '{value}°C',
     hiddenLabel: 'First'
};

public lineStyle= {
  width: 2,
  color: 'blue'
};

  public majorTicks: Object = {
  interval: 20,
  color:'blue',
  height: 10,
  width: 3,
  
};

public minorTicks : Object= {
  interval: 5,
  color:'green',
  height: 5,
  width: 2,

};
}