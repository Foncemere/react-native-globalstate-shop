import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AisleScreen from './AisleScreen';
import CheckoutScreen from './CheckoutScreen';
import ItemDetailsScreen from './ItemDetailsScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Aisle'} component={AisleScreen} />
      <Stack.Screen name={'Checkout'} component={CheckoutScreen} />
      <Stack.Screen name={'ItemDetails'} component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
