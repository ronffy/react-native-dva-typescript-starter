import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Loading from './components/Loading'
import Login from './containers/Login'
// import Home from './containers/Home'
// import Account from './containers/Account'
// import Detail from './containers/Detail'

// const HomeNavigator = createBottomTabNavigator({
//   Home,
//   Account,
// })

// HomeNavigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];

//   return {
//     headerTitle: routeName,
//   }
// }

// const MainNavigator = createStackNavigator(
//   {
//     HomeNavigator,
//     Detail,
//   },
//   // {
//   //   headerMode: 'float',
//   // }
// )

const AppNavigator = createStackNavigator(
  {
    // Main: MainNavigator,
    Login,
  },
  {
    initialRouteName: 'Login'
  }
  // {
  //   headerMode: 'none',
  //   mode: 'modal',
  //   navigationOptions: {
  //     gesturesEnabled: false,
  //   },
  //   transitionConfig: () => ({
  //     transitionSpec: {
  //       duration: 300,
  //       easing: Easing.out(Easing.poly(4)),
  //       timing: Animated.timing,
  //     },
  //     screenInterpolator: sceneProps => {
  //       const { layout, position, scene } = sceneProps
  //       const { index } = scene

  //       const height = layout.initHeight
  //       const translateY = position.interpolate({
  //         inputRange: [index - 1, index, index + 1],
  //         outputRange: [height, 0, 0],
  //       })

  //       const opacity = position.interpolate({
  //         inputRange: [index - 1, index - 0.99, index],
  //         outputRange: [0, 1, 1],
  //       })

  //       return { opacity, transform: [{ translateY }] }
  //     },
  //   }),
  // }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  state => {
    // debugger
    return state.router;
  }
)


const App = createReduxContainer(AppNavigator);

const mapStateToProps = (state) => ({
  state: state.router,
});
const AppWithNavigationState = connect(mapStateToProps)(App);;

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    debugger
    const currentScreen = getActiveRouteName(this.props.router)
    debugger
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
    return <AppWithNavigationState />
  }
}

export default connect(({ app, router }) => ({ app, router }))(Router)
