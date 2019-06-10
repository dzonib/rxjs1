import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ItemListActions from './store/item.actions';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Observable<{ items: Item[] }>;
  name: any;

  constructor(private store: Store<{ itemList: { items: Item[] } }>) {}

  ngOnInit() {
    this.items = this.store.select('itemList');
  }

  addItem() {
    console.log(this.name);
    const test = new ItemListActions.AddItem({ id: 1, name: this.name });
    console.log(test);
    this.store.dispatch(
      new ItemListActions.AddItem({id: 123, name: this.name })
    );
  }
}
