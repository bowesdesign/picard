import { Component, Input, OnInit } from '@angular/core';
import { Update } from '../../models/update';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input() updates: any[];

  constructor() {
  }

  ngOnInit() {
  }

  sortedUpdates() {
    const sortedUpdates = this.updates || [];
    sortedUpdates.sort((a, b) => a.timestamp - b.timestamp).reverse();
    return sortedUpdates;
  }
}
