import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ImageHeader } from '../components/ImageHeader.js';
import { colors } from '../components/colors.js';

import store from '../components/redux/store';
import { keys } from '../components/keys.js';

export default class People extends React.Component {
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
          {this.stringToName(keys[currentState.language].birth_year)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].birth_year)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].gender)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].gender)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].height)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].height)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].mass)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].mass)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].hair_color)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].hair_color)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].skin_color)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].skin_color)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].eye_color)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].eye_color)}
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
