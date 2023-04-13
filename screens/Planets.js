import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ImageHeader } from '../components/ImageHeader.js';
import { colors } from '../components/colors.js';

import store from '../components/redux/store';
import { keys } from '../components/keys.js';

export default class Planets extends React.Component {
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
          {this.stringToName(keys[currentState.language].population)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].population)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].diameter)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].diameter)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].climate)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].climate)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].terrain)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].terrain)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].rotation_period)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].rotation_period)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].orbital_period)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].orbital_period)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].gravity)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].gravity)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].surface_water)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].surface_water)}
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
