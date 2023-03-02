import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from './styles';
import {Categories} from '../../fakeData/databaseOfItems';
import {GridTile} from '../../components/GridTile';

const HomeScreen = props => {
  const renderItem = ({item, index}) => {
    return <GridTile id={item} />;
  };

  return (
    <View style={{padding: 12, flex: 1}}>
      <Text>Home Search bar</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TextInput style={Styles.input} />
        <View
          style={{
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderLeftWidth: 0,
            backgroundColor: '#d4dae3',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Checkout');
            }}>
            <Text>To Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between', gap: 12}}
        contentContainerStyle={{marginTop: 12, gap: 12}}
        data={Object.keys(Categories)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
