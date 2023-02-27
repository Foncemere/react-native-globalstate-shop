import {create} from 'zustand';
import DatabaseOfItems from '../fakeData/databaseOfItems';

const zustardStore = create(set => ({
  wholestore: DatabaseOfItems,
  cart: [],
  addToCart: item => set(state => ({cart: state.cart.push(item)})),
}));

export default zustardStore;
