import React from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import zustardStore from '../../store';
import BaseStyles from '../../baseStyling/styles';
import {CategoryTitle} from '../../fakeData/databaseOfItems';

const AisleScreen = props => {
  const wholestore = zustardStore.getState().wholestore;
  const aisle = Object.values(wholestore).filter(item => {
    return item?.category === props.route.params.id;
  });

  const renderAisleItems = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{borderWidth: 1, marginVertical: 16, padding: 12}}
        onPress={() => {
          props.navigation.navigate('ItemDetails', {
            id: item.id,
          });
        }}>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={BaseStyles.standard_border}>
      <View style={BaseStyles.header}>
        <Button title={'Go back'} onPress={() => props.navigation.goBack()} />
        <Text>{CategoryTitle[props.route.params.id]}</Text>
      </View>
      <FlatList data={aisle} renderItem={renderAisleItems} />
    </View>
  );
};

export default AisleScreen;
