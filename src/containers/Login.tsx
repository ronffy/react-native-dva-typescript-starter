import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { Button, Touchable } from '../components'
import { createAction, NavigationActions } from '../utils'
import { WholeState } from '../types/globals';

interface StateProps {
  login: boolean;
  loading: boolean;
  fetching: boolean;
}
interface OwnProps {
}
type Props = DispatchProp & StateProps & OwnProps;

class Login extends Component<Props> {
  static navigationOptions = {
    title: 'Login',
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Button text="Login" onPress={this.onLogin} />
        )}
        {!fetching && (
          <Touchable style={styles.close} onPress={this.onClose}>
            <Image
              style={styles.icon}
              source={require('../images/close.png')}
            />
          </Touchable>
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
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
})

export default connect(({ app }: WholeState) => ({ ...app }))(Login)

