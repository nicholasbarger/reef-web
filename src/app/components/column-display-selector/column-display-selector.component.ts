import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-display-selector',
  templateUrl: './column-display-selector.component.html',
  styleUrls: ['./column-display-selector.component.css']
})
export class ColumnDisplaySelectorComponent implements OnInit {

  @Input()
  columns: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
