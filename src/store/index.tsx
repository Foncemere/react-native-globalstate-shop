import {create} from 'zustand';
import DatabaseOfItems from '../fakeData/databaseOfItems';

const zustardStore = create(set => ({
  wholestore: DatabaseOfItems,
  cart: [],
  addToCart: item =>
    set(state => {
      const foundIndex = state.cart.findIndex(e => e.id === item.id) !== -1;
      if (foundIndex) {
        return {
          cart: state.cart.map((item, index) => {
            if (foundIndex) {
              return {...item, count: item.count + 1};
            } else {
              return item;
            }
          }),
        };
      }
      return {cart: state.cart.concat({...item, count: 1})};
    }),
}));

export default zustardStore;
