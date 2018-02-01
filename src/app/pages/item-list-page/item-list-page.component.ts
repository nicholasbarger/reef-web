import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ActionMenuItem } from '../../components/action-menu/action-menu-item';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.css']
})
export class ItemListPageComponent implements OnInit {

  actionMenuItems: Array<ActionMenuItem>;
  columns: Array<string>;
  items: Array<Item>;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actionMenuItems = [
      new ActionMenuItem('New', '/items/new'),
      new ActionMenuItem('Edit', '/items/edit'),
      new ActionMenuItem('Export', '/items/export'),
      new ActionMenuItem('Print', '/items/print'),
      new ActionMenuItem('Delete', '/items/delete')
    ];

    this.columns = ['SKU/UPC', 'Name', 'Avg Cost', 'Avg Sale', 'Avg Margin', 'Status'];

    this.items = this.itemService.list();


  }

}
