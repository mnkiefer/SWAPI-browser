import React from 'react';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import { ImageHeader } from '../components/ImageHeader.js';

import { colors } from '../components/colors.js';

import { connect } from 'react-redux';
import { updateLanguage, updateItems } from '../components/redux/actions.js';

// Translator screen to change language into Yodish, etc.
class Translator extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: 'black',
      },
      headerStyle: {
        backgroundColor: 'transparent',
      },
      header: (props) => <ImageHeader {...props} />,
    };
  };

  handleSelectLanguage = (language) => {
    this.props.dispatch(updateLanguage(language));
    this.props.dispatch(
      updateItems(this.props.search, this.props.category, language, 1)
    )
  };

  render() {
    const languages = {
      English: require('../assets/luke.png'),
      Wookiee: require('../assets/chewie.png')
    };

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Choose your language:</Text>
        {Object.entries(languages).map(([key, val]) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                padding: 15,
                textAlign: 'center',
                fontSize: 20,
              }}
              onPress={() => this.handleSelectLanguage(key)}>
              <View style={styles.row}>
                <Image
                  style={{
                    justifyContent: 'right',
                    height: 
                      this.props.language === key
                        ? 100
                        : 50,
                    width:
                      this.props.language === key
                        ? 100
                        : 50,
                    resizeMode: 'contain'
                  }}
                  source={val}
                />
                <Text
                  style={{
                    justifyContent: 'left',
                    color:
                      this.props.language === key
                        ? colors.turboYellow
                        : colors[this.props.language],
                    fontWeight:
                      this.props.language === key
                        ? 'bold'
                        : 'normal',
                    fontSize: 
                      this.props.language === key
                        ? 30
                        : 20
                  }}>
                  {key}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 50,
    color: colors.turboYellow
  },
});

const mapStateToProps = (state) => ({
  category: state.category.category,
  language: state.language.language,
  search: state.search.search,
  page: state.page.page
});

export default connect(mapStateToProps)(Translator);
