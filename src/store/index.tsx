import {create} from 'zustand';
import DatabaseOfItems from '../fakeData/databaseOfItems';

const zustardStore = create(set => ({
  wholestore: DatabaseOfItems,
}));

export default zustardStore;
