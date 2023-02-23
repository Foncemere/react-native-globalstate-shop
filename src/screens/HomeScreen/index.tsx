import React from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Styles from './styles';
import DatabaseOfItems from '../../fakeData/databaseOfItems';
import {GridTile} from '../../components/GridTile';

const HomeScreen = () => {
  const renderItem = ({}) => {
    return <GridTile />;
  };

  return (
    <View style={{padding: 12, flex: 1}}>
      <Text>Home Search bar</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput style={Styles.input} />
      </View>
      <FlatList
        numColumns={2}
        data={Object.keys(DatabaseOfItems)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
