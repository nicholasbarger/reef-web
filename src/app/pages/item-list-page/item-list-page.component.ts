import { Component, OnInit } from '@angular/core';

import { ActionMenuItem } from '../../components/action-menu/action-menu-item';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.css']
})
export class ItemListPageComponent implements OnInit {

  public actionMenuItems: Array<ActionMenuItem>
  public items: Array<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.actionMenuItems = [
      new ActionMenuItem('New', '#'),
      new ActionMenuItem('Export', '#'),
      new ActionMenuItem('Print', '#'),
      new ActionMenuItem('Delete', '#')
    ];
    
    this.items = this.itemService.list();
  }

}
