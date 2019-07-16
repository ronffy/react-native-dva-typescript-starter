/**
 * Demo2 页面，测试用
 * @author ronffy
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import { NavigationActions } from '../utils';
import { Button } from '../components';

type Props = DispatchProp;

class Demo2 extends React.PureComponent<Props> {
  static navigationOptions = {
    mode: 'modal',
    headerMode: 'none',
  }

  onPressRouteBtn = () => {
    this.props.dispatch(NavigationActions.navigate({
      routeName: 'Mylife'
    }));
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>demo2</Text>
        <Button text="点击去我的生活页" onPress={this.onPressRouteBtn} />
      </View>
      
    );
  }
}

export default connect()(Demo2)

const styles = StyleSheet.create({
  text: {
    paddingTop: 100,
    fontSize: 30,
  },
  
})
