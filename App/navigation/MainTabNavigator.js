import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/MapScreen';
import TipsScreen from '../screens/TipsScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ResourcesStack = createStackNavigator(
  {
    Resources: ResourcesScreen,
  },
  config
);

ResourcesStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ResourcesStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

MapStack.path = '';

const TipsStack = createStackNavigator(
  {
    Tips: TipsScreen,
  },
  config
);

TipsStack.navigationOptions = {
  tabBarLabel: 'Tips',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

TipsStack.path = '';

const tabNavigator = createMaterialBottomTabNavigator({
  TipsStack,
  MapStack,
  ResourcesStack,
});

tabNavigator.path = '';

export default tabNavigator;
