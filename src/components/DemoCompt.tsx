/**
 * Demo 组件，测试用
 * @author ronffy
 */

import React, { SFC, ReactNode } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { BaseProps } from '../types/globals';

interface OwnProps {
  name: string | ReactNode;
}

type Props = BaseProps & OwnProps;

const DemoCompt: SFC<Props> = React.memo(({ name, ...otherProps }) => (
  <View {...otherProps}>
    <Text style={styles.root}>
      我的姓名是：{name}
    </Text>
  </View>
))

export default DemoCompt

const styles = StyleSheet.create({
  root: {
    color: '#030303',
    fontSize: 16,
  }
});