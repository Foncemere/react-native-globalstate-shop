import React from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Styles from './styles';
import DatabaseOfItems from '../../fakeData/databaseOfItems';
import {GridTile} from '../../components/GridTile';
import BaseStyles from '../../baseStyling/styles';

const HomeScreen = () => {
  const renderItem = ({item, index}) => {
    return <GridTile id={item} />;
  };

  return (
    <View style={{padding: 12, flex: 1}}>
      <Text>Home Search bar</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput style={Styles.input} />
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between', gap: 12}}
        contentContainerStyle={{marginTop: 12, gap: 12}}
        data={Object.keys(DatabaseOfItems)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
