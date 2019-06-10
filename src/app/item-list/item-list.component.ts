import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from './item-service.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Observable<{ items: Item[] }>;
  item: Item;

  constructor(
    private itemService: ItemService,
    private store: Store<{ itemList: { items: Item[] } }>
  ) {}

  ngOnInit() {
    this.items = this.store.select('itemList');
    setTimeout(() => {
      console.log(this.items);
    }, 1000);
  }
}
