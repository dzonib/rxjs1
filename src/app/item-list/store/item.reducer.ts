import * as ItemListActions from './item.actions';

const initialState = {
  items: [{ id: 5, name: 'yoyoyo' }, { id: 6, name: 'ozoozo' }]
};

export function itemReducer(
  state = initialState,
  action: ItemListActions.AddItem
) {
  switch (action.type) {
    case ItemListActions.ADD_ITEM:
      console.log(action.payload);
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
