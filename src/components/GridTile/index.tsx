import {Text, TouchableOpacity, View} from 'react-native';
import DatabaseOfItems, {CategoryTitle} from '../../fakeData/databaseOfItems';
import BaseStyles from '../../baseStyling/styles';
import {useNavigation} from '@react-navigation/native';

export const GridTile = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Aisle', {id: props.id})}
      style={{
        borderWidth: 1,
        paddingVertical: 30,
        ...BaseStyles.fill_and_center,
      }}>
      <Text>{CategoryTitle[props.id]}</Text>
    </TouchableOpacity>
  );
};
