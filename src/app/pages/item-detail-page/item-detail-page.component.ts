import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-detail-page',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.css']
})
export class ItemDetailPageComponent implements OnInit {

  public item: Item;

  constructor(
    private itemService: ItemService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params["id"];
    this.item = this.itemService.get(id);
  }

  back(): void {
    this.location.back();
  }

  delete(): void {
    console.log('delete clicked');
  }

  edit(): void {
    console.log('edit clicked');
  }

  print(): void {
    console.log('print clicked');
  }
}
