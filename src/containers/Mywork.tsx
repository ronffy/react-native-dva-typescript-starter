/**
 * Mywork 页面，测试用
 * @author ronffy
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@ant-design/react-native';
import { connect, DispatchProp } from 'react-redux';
import { NavigationActions } from '../utils'

interface OwnProps {
}
type Props = DispatchProp & OwnProps;

class Mywork extends React.Component<Props> {

  onPressRouteBtn = () => {
    this.props.dispatch(NavigationActions.navigate({
      routeName: 'Mylife'
    }));
  }

  static navigationOptions = {
    mode: 'modal',
    headerMode: 'none',
  };

  render() {
    return (
      <View>

        <Text>好好学习，天天工作</Text>

        {/* 跳转按钮 */}
        <Button
          onPress={this.onPressRouteBtn}
          type="primary"
          style={styles.btn}
        >
          <Text>进入 我的生活</Text>
        </Button>
      </View>
    );
  }
}

export default connect()(Mywork);

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
  }
})