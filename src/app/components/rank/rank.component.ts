import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: number) {
    this.value = value;
  }

}
