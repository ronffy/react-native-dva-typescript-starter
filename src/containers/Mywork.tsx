/**
 * Mywork 页面，测试用
 * @author ronffy
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { BaseProps } from '../types/globals';

interface OwnProps {
}
type Props = BaseProps & OwnProps;

export default class Mywork extends React.Component<Props> {

  onPressRouteBtn = () => {
    this.props.navigation.navigate('Mylife');
  }

  static navigationOptions = {
    headerTitle: '我的工作',
    headerLeft: (
      <Icon name="left" size="md" />
    ),
    headerRight: (
      <Icon name="setting" size="md" color="blue" />
    ),
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

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
  }
})