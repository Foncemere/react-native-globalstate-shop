import React from 'react';
import {Button, Text, View} from 'react-native';
import zustardStore from '../../store';
import BaseStyles from '../../baseStyling/styles';

const AisleScreen = props => {
  const store = zustardStore();
  console.log(props.route.params.id);
  return (
    <View style={BaseStyles.standard_border}>
      <View style={BaseStyles.header}>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
        <Text>{store.wholestore[props.route.params.id]?.title}</Text>
      </View>
    </View>
  );
};

export default AisleScreen;
