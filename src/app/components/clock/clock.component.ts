import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  date: string;
  time: string;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.time = moment().format('HH:mm:ss');
      this.date = moment().format('LL');
    }, 1000);

  }

}
