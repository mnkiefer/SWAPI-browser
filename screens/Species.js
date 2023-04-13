import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ImageHeader } from '../components/ImageHeader.js';
import { colors } from '../components/colors.js';

import store from '../components/redux/store';
import { keys } from '../components/keys.js';

export default class Species extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let currentState = store.getState().language;
    let title = navigation.state.params[keys[currentState.language].name];
    return {
      headerTitleStyle: {
        color: colors.turboYellow,
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitle: title,
    };
  };

  stringToName(string) {
    let name = string.charAt(0).toUpperCase() + string.slice(1);
    return name;
  }

  render() {
    let currentState = store.getState().language;
    return (
      <View style={styles.container}>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].language)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].language)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].designation)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].designation)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].average_height)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].average_height)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].skin_colors)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].skin_colors)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].hair_colors)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].hair_colors)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].eye_colors)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].eye_colors)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].average_lifespan)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].average_lifespan)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'Center'
  },
  textBold: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: colors.turboYellow,
  },
  textItalic: {
    textAlign: 'center',
    padding: 10,
    fontStyle: 'italic',
    color: colors.turboYellow,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    color: colors.turboYellow,
  },
});
