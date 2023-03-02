import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import zustardStore from '../../store';

export const ItemDetailsScreen = props => {
  const aisle = zustardStore.getState().wholestore[props.route.params.category];
  const add = zustardStore.getState().addToCart;
  const [text, onChangeText] = React.useState('0');

  return (
    <View style={{}}>
      <View>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
      </View>
      <View style={{borderWidth: 1, marginVertical: 16, padding: 12}}>
        <Text>{aisle.data[props.route.params.id].name}</Text>
        <Text>{aisle.data[props.route.params.id].description}</Text>
        <Text>${aisle.data[props.route.params.id].price}</Text>

        <View style={{borderWidth: 1, marginVertical: 16, padding: 12}}>
          <Text>Quantity:</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
        <Button
          title={'Add To Cart'}
          onPress={() => {
            add(aisle.data[props.route.params.id], parseInt(text) || 1);
            props.navigation.navigate('Checkout');
          }}
        />
      </View>
    </View>
  );
};

export default ItemDetailsScreen;
