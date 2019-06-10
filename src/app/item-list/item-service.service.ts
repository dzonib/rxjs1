import { Injectable } from '@angular/core';
const items = [
  { id: 1, name: 'king' },
  { id: 2, name: 'kong' },
  { id: 3, name: 'marmun' },
  { id: 4, name: 'blablabla' },
  { id: 5, name: 'yoyoyo' },
  { id: 6, name: 'ozoozo' }
];

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  getItems() {
    return items;
  }
}
