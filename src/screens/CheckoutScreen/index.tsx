import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import zustardStore from '../../store';

export const CheckoutScreen = props => {
  const checkout = zustardStore(state => state.cart);
  return (
    <View>
      <View>
        <Text>For Checkout</Text>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
      </View>
      <FlatList
        data={checkout}
        renderItem={({item}) => (
          <View>
            <Text>Quantity: {item.count}</Text>
            <Text>
              {item.name}, ${item.price}, total: ${item.price * item.count}
            </Text>
          </View>
        )}
        contentContainerStyle={{padding: 16}}
      />
      <View>
        <Text>
          total:{' '}
          {checkout.reduce((acc, item) => {
            return acc + item.count * item.price;
          }, 0)}
        </Text>
      </View>
    </View>
  );
};

export default CheckoutScreen;
