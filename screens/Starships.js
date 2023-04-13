import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ImageHeader } from '../components/ImageHeader.js';
import { colors } from '../components/colors.js';

import store from '../components/redux/store';
import { keys } from '../components/keys.js';

export default class Starships extends React.Component {
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
          {this.stringToName(keys[currentState.language].model)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].model)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].manufacturer)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].manufacturer)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].cost_in_credits)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].cost_in_credits)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].length)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].length)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].max_atmosphering_speed)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].max_atmosphering_speed)}
        </Text>
        <Text style={styles.textItalic}>
          {this.stringToName(keys[currentState.language].crew)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].crew)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].passengers)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].passengers)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].cargo_capacity)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].cargo_capacity)}
        </Text>
        <Text style={styles.text}>
          {this.stringToName(keys[currentState.language].consumables)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].consumables)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].hyperdrive_rating)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].hyperdrive_rating)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].MGLT)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].MGLT)}
        </Text>
        <Text style={styles.textBold}>
          {this.stringToName(keys[currentState.language].starship_class)}:{' '}
          {this.props.navigation.getParam(keys[currentState.language].starship_class)}
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
