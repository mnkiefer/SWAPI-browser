import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import { colors } from './colors.js';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImageHeader } from '../components/ImageHeader.js';

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SearchScreen from '../screens/Search.js';
import TranslatorScreen from '../screens/Translator.js';

import PeopleScreen from '../screens/People.js';
import PlanetsScreen from '../screens/Planets.js';
import SpeciesScreen from '../screens/Species.js';
import VehiclesScreen from '../screens/Vehicles.js';
import StarshipsScreen from '../screens/Starships.js';

// Stack navigators
const SearchStackNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    People: PeopleScreen,
    Planets: PlanetsScreen,
    Species: SpeciesScreen,
    Vehicles: VehiclesScreen,
    Starships: StarshipsScreen,
  },
  { initialRouteName: 'Search' }
);

const TranslatorStackNavigator = createStackNavigator(
  { Translator: TranslatorScreen },
  { initialRouteName: 'Translator' }
);

// Tab navigator
const TabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={'md-search'} size={50} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: TranslatorStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name={'md-globe'} size={50} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.turboYellow,
      inactiveTintColor: colors.hazyPurple,
      inactiveBackgroundColor: 'black',
      style: { backgroundColor: 'black', height: 100, padding: 0, margin: 0 },
    },
  }
);

// And app container
let Navigator = createAppContainer(TabNavigator);
export default Navigator;
