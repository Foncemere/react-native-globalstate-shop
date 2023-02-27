import React from 'react';
import {FlatList, Text, View} from 'react-native';
import zustardStore from '../../store';

export const CheckoutScreen = () => {
  const checkout = zustardStore(state => state.cart);
  return (
    <View>
      <View>
        <Text>For Checkout</Text>
      </View>
      <FlatList
        data={checkout}
        renderItem={({item}) => (
          <View>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        )}
        contentContainerStyle={{backgroundColor: 'red'}}
      />
    </View>
  );
};

export default CheckoutScreen;
