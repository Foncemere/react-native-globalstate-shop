import {Text, TouchableOpacity, View} from 'react-native';
import DatabaseOfItems from '../../fakeData/databaseOfItems';
import BaseStyles from '../../baseStyling/styles';

export const GridTile = props => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        paddingVertical: 30,
        ...BaseStyles.fill_and_center,
      }}>
      <Text>{DatabaseOfItems[props.id].title}</Text>
    </TouchableOpacity>
  );
};
