import React from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import { ImageHeader } from '../components/ImageHeader.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatListItems from '../components/FlatListItems';
import { colors } from '../components/colors.js';

import { connect } from 'react-redux';
import { updateCategory, updateItems } from '../components/redux/actions.js';

class Search extends React.Component {
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

  componentDidMount() {
    let page = 1;
    this.props.dispatch(
      updateItems('', this.props.category, this.props.language, page)
    );
  }

  handleSelectCategory = (category) => {
    let page = 1;
    this.props.dispatch(updateCategory(category));
    this.props.dispatch(
      updateItems(this.props.search, category, this.props.language, 1)
    );
  };

  onChangeText = (text) => {
    let page = 1;
    this.props.dispatch(
      updateItems(text, this.props.category, this.props.language, page)
    );
  };

  handleSelectItem = (item) => {
    const category = this.props.category;
    const route = category.charAt(0).toUpperCase() + category.slice(1);
    this.props.navigation.push(route, item);
  };

  handleEndItemList = (dist) => {
    if (dist.distanceFromEnd > 0) {
      let page = this.props.page + 1;
      this.props.dispatch(
        updateItems(
          this.props.search,
          this.props.category,
          this.props.language,
          page
        )
      );
    }
  };

  render() {
    const categories = {
      people: 'md-people',
      planets: 'md-planet',
      species: 'logo-android',
      vehicles: 'md-bicycle',
      starships: 'md-jet',
    };
    if (this.props.items.length > 0) {
      return (
        <View style={styles.container}>
          <View style={styles.buttons}>
            {Object.entries(categories).map(([key, val]) => {
              return (
                <TouchableOpacity
                  onPress={() => this.handleSelectCategory(key)}>
                  <Ionicons
                    style={{
                      color:
                        this.props.category == key
                          ? colors.turboYellow
                          : colors[this.props.language],
                    }}
                    name={val}
                    size={50}
                    color={'blue'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={styles.search}
            onChangeText={(text) => this.onChangeText(text)}
            placeholder="Start your search..."
          />
          <FlatListItems
            items={this.props.items}
            onSelectItem={this.handleSelectItem}
            onEndItemList={this.handleEndItemList}></FlatListItems>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.buttons}>
            {Object.entries(categories).map(([key, val]) => {
              return (
                <TouchableOpacity
                  onPress={() => this.handleSelectCategory(key)}>
                  <Ionicons
                    style={{
                      color:
                        this.props.category == key
                          ? colors.turboYellow
                          : colors[this.props.language],
                    }}
                    name={val}
                    size={50}
                    color={'blue'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={styles.search}
            onChangeText={(text) => this.onChangeText(text)}
            placeholder="Start your search..."
          />
          <Text style={styles.error}></Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  search: {
    height: 40,
    padding: 10,
    marginHorizontal: 10,
    borderColor: colors.turboYellow,
    borderWidth: 1,
    color: colors.turboYellow,
    backgroundColor: 'black',
    placeholderTextColor: colors.turboYellow,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  error: {
    color: 'red',
    paddingHorizontal: 15,
  },
});

const mapStateToProps = (state) => ({
  category: state.category.category,
  language: state.language.language,
  items: state.items.items,
  search: state.search.search,
  page: state.page.page,
});

export default connect(mapStateToProps)(Search);
