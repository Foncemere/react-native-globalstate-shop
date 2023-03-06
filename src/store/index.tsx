import {create} from 'zustand';
import DatabaseOfItems from '../fakeData/databaseOfItems';

const zustardStore = create(set => ({
  wholestore: DatabaseOfItems,
  cart: [],
  addToCart: (item, quantity) =>
    set(state => {
      const foundIndex = state.cart.findIndex(e => e.id === item.id);
      const newArray = [...state.cart];
      if (foundIndex !== -1) {
        newArray[foundIndex] = {
          ...newArray[foundIndex],
          count: newArray[foundIndex].count + quantity,
        };
      } else {
        newArray.push({...item, count: quantity});
      }
      return {
        cart: newArray,
      };
    }),
}));

export default zustardStore;
