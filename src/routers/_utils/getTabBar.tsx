
import React from 'react';
import { OutlineGlyphMapType } from '@ant-design/icons-react-native';
import { Icon } from '@ant-design/react-native';

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

export default getTabBarIcon;