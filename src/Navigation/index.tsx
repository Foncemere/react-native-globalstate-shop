import createStackNavigator from 'react-native-screens/createNativeStackNavigator';
import React from 'react';
import {Text, View} from 'react-native';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
