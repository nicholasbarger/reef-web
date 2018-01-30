import { Injectable } from '@angular/core';
import { Item } from './item';

import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  constructor() { }

  public get(id: string): Item {
    return new Item('7260974185', 'Alden\'s Ice Cream Organic & Natural Vanilla Bean', '8d082ff5-6983-4f09-a46f-cf0efb85b143', 'Active');
  }

  public list(): Array<Item> {
    return new Array<Item>(
      new Item('7260974185', 'Alden\'s Ice Cream Organic & Natural Vanilla Bean', '8d082ff5-6983-4f09-a46f-cf0efb85b143', 'Active'),
      new Item('7260973650', 'Julie\'s Organic Ice Cream Vanilla Quart', 'b522181c-5cbe-4d91-8ac8-7f3bd165e30f', 'Active'),
      new Item('7260974038', 'Julie\'s Organic Vanilla Chocolate Dipped Non-Dairy Bars', 'befb4034-eed7-4d29-9261-13b2bb3537de', 'Active'),
      new Item('2400001515', 'Del Monte Cream Style Corn', 'b5dcbf37-0c3b-4a92-ab84-679d1f002fd3', 'Active')
    );
  }
}
