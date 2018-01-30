import { Component, OnInit } from '@angular/core';

import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.css']
})
export class ItemListPageComponent implements OnInit {

  public items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.list();
  }

}
