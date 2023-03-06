import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import zustardStore from '../../store';

export const ItemDetailsScreen = props => {
  const item = zustardStore.getState().wholestore[props.route.params.id];
  const add = zustardStore.getState().addToCart;
  const [text, onChangeText] = React.useState('1');

  return (
    <View style={{}}>
      <View>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
      </View>
      <View style={{borderWidth: 1, marginVertical: 16, padding: 12}}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>

        <View style={{borderWidth: 1, marginVertical: 16, padding: 12}}>
          <Text>Quantity:</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
        <Button
          title={'Add To Cart'}
          onPress={() => {
            add(item, parseInt(text) || 1);
            props.navigation.navigate('Checkout');
          }}
        />
      </View>
    </View>
  );
};

export default ItemDetailsScreen;
