import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../components/colors.js';
import { keys } from '../components/keys.js';

import store from './redux/store';

// SWAPI item row within SWAPI Browser's Scrollview
const RowItem = (props) => {
  let currentState = store.getState().language
  return (
    (
      <TouchableOpacity
        style={styles.row}
        onPress={() => props.onSelectItem(props)}>
        <Text style={styles.textTitle}>{props[keys[currentState.language].name]}</Text>
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: 'row',
  },
  textTitle: {
    flex: 1,
    color: colors.turboYellow,
  },
});

export default RowItem;
