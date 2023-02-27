import React from 'react';
import {FlatList, Text, View} from 'react-native';

export const CheckoutScreen = () => {
  return (
    <View>
      <View>
        <Text>For Checkout</Text>
      </View>
      <FlatList
        data={[]}
        renderItem={() => <View />}
        contentContainerStyle={{backgroundColor: 'red'}}
      />
    </View>
  );
};

export default CheckoutScreen;
