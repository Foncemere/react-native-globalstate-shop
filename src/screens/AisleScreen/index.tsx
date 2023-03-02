import React from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import zustardStore from '../../store';
import BaseStyles from '../../baseStyling/styles';

const AisleScreen = props => {
  const aisle = zustardStore.getState().wholestore[props.route.params.id];
  const add = zustardStore.getState().addToCart;

  const renderAisleItems = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{borderWidth: 1, marginVertical: 16, padding: 12}}
        onPress={() => {
          props.navigation.navigate('ItemDetails', {
            id: item,
            category: props.route.params.id,
          });
        }}>
        <Text>{item}</Text>
        <Text>{aisle.data[item].description}</Text>
        <Text>${aisle.data[item].price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={BaseStyles.standard_border}>
      <View style={BaseStyles.header}>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
        <Text>{aisle?.title}</Text>
      </View>
      <FlatList data={Object.keys(aisle.data)} renderItem={renderAisleItems} />
    </View>
  );
};

export default AisleScreen;
