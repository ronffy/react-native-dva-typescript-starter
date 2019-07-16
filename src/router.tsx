import React from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect, DispatchProp } from 'react-redux';

import Loading from './components/Loading';
import Login from './containers/Login';
import Home from './containers/Demo';
import Demo2 from './containers/Demo2';
import Account from './containers/Account';
import Detail from './containers/Detail';
import Mywork from './containers/Mywork';
import Mylife from './containers/Mylife';

import { WholeState, AppState } from './types/globals';


const HomeNavigator = createBottomTabNavigator({
  Home,
  Account,
  Demo2,
})

HomeNavigator.navigationOptions = ({ navigation }: any) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  return {
    headerTitle: routeName,
  }
}

const MainNavigator = createStackNavigator(
  {
    HomeNavigator,
    Detail,
    Mylife,
    Mywork,
  },
  {
    headerMode: 'float',
  }
)

const AppNavigator = createStackNavigator(
  {
    Main: MainNavigator,
    Login,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state: WholeState) => state.router
)


const App: any = reduxifyNavigator(AppNavigator, 'root');

function getActiveRouteName(navigationState: any): any {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

interface StateProps {
  app: AppState;
  router: any;
}
type Props = DispatchProp & StateProps;

class Router extends React.PureComponent<Props> {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />
    return <App dispatch={dispatch} state={router} />
  }
}

export default connect(({ app, router }: WholeState) => ({ app, router }))(Router)
