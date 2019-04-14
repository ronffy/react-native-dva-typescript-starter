/**
 * 路由配置
 * @author ronffy
 */
import { createBottomTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import getTabBar from './_utils/getTabBar';

import Demo from './demo';
import Demo2 from './demo2';
import Aboutme from './aboutme';

const TabNavigator = createBottomTabNavigator(
  {
    Demo,
    Demo2,
    Aboutme
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBar(navigation, focused, tintColor),
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
