import { Component, Input, OnInit } from '@angular/core';

import { ActionMenuItem } from './action-menu-item';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  @Input()
  list: Array<ActionMenuItem>

  constructor() { }

  ngOnInit() {
  }

}
