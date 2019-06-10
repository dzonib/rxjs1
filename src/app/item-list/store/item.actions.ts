import { Action } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';

export const ADD_ITEM = '[Item] Add new item to array';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Item) {}
}
