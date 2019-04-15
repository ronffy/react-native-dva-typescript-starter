/**
 * Mylife 页面，测试用
 * @author ronffy
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { connect, DispatchProp } from 'react-redux';
import { NavigationActions } from '../utils'

interface OwnProps {
}
type Props = DispatchProp & OwnProps;

class Mylife extends React.Component<Props> {

  onPressRouteBtn = () => {
    this.props.dispatch(NavigationActions.navigate({
      routeName: 'Mywork'
    }));
  }

  static navigationOptions = {
    headerTitle: '我的生活',
    headerRight: (
      <Icon name="setting" size="md" color="blue" />
    ),
  };

  render() {
    return (
      <View>

        <Text>生活是一首歌</Text>

        {/* 跳转按钮 */}
        <Button
          onPress={this.onPressRouteBtn}
          type="primary"
          style={styles.btn}
        >
          <Text>进入 我的工作</Text>
        </Button>
      </View>
    );
  }
}

export default connect()(Mylife)

const styles = StyleSheet.create({
  btn: {
    marginTop: 30
  }
})