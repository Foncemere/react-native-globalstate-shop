import {create} from 'zustand';
import DatabaseOfItems from '../fakeData/databaseOfItems';

const zustardStore = create(set => ({
  wholestore: DatabaseOfItems,
  cart: [],
  addToCart: item =>
    set(state => {
      return {cart: state.cart.concat(item)};
    }),
}));

export default zustardStore;
