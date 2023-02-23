import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Styles from './styles';

const HomeScreen = () => {
  return (
    <View style={{padding: 12, flex: 1}}>
      <Text>Home Search bar</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput style={Styles.input} />
      </View>
    </View>
  );
};

export default HomeScreen;
