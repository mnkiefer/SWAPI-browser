import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';
import RowItem from './RowItem';

import { colors } from '../components/colors.js';

// SWAPI Browser's FlatList
const FlatListItems = props => (
  <FlatList 
    style={styles.container}
    renderItem={({ item }) => (
      <RowItem onSelectItem={props.onSelectItem} {...item} />
    )}
    data={props.items}
    keyExtractor={(item, index) => index}
    onEndReached={props.onEndItemList}
    onEndReachedThreshold={0.1}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.turboYellow,
    backgroundColor: 'black'
  }
})

export default FlatListItems;
