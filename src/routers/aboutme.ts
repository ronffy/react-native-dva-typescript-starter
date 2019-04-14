import { createAppContainer, createStackNavigator } from 'react-navigation';

import Mylife from '../pages/Mylife';
import Mywork from '../pages/Mywork';


const AboutmeStack = createStackNavigator(
  {
    Mylife,
    Mywork,
  },
  {
    initialRouteName: 'Mylife'
  }
);

export default createAppContainer(AboutmeStack)
