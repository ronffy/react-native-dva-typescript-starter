import React from 'react';
import { createBottomTabNavigator, createAppContainer, NavigationActions, createStackNavigator } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import { OutlineGlyphMapType } from '@ant-design/icons-react-native';

import Demo from './src/routes/Demo';
import Demo2 from './src/routes/Demo2';
import Mylife from './src/routes/Mylife';
import Mywork from './src/routes/Mywork';


const AboutmeStack = createStackNavigator(
  {
    Mylife,
    Mywork,
  },
  {
    initialRouteName: 'Mylife'
  }
);

createAppContainer(AboutmeStack)


const getTabBarIcon = (navigation: any, focused: boolean, tintColor: any) => {
  const { routeName } = navigation.state;
  let iconName: OutlineGlyphMapType;

  switch (routeName) {
    case 'Demo':
      iconName = 'home';
      break;
    case 'Demo2':
      iconName = 'menu';
      break;
    case 'Aboutme':
      iconName = 'message';
      break;
    default:
      iconName = 'lock';
      break;
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Demo,
    Demo2,
    Aboutme: AboutmeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

export {
  NavigationActions
}

export default createAppContainer(TabNavigator);
