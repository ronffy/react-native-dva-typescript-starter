import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import { Button } from '../components';
import { createAction, NavigationActions } from '../utils';
import { WholeState } from '../types/globals';

interface StateProps {
  login: boolean;
}
interface OwnProps {
}
type Props = DispatchProp & StateProps & OwnProps;

class Account extends React.PureComponent<Props> {
  static navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }: any) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/person.png')}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default connect(({ app }: WholeState) => ({ login: app.login }))(Account)
