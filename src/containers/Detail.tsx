import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from '../components'
import { NavigationActions } from '../utils'
import { DispatchProp } from 'react-redux';


interface OwnProps {
}
type Props = DispatchProp & OwnProps;

type State = {
}

class Detail extends Component<Props, State> {
  static navigationOptions = {
    title: 'Detail',
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ key: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Back" onPress={this.goBack} />
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
})

export default connect()(Detail)
