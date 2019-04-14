/**
 * Demo2 页面，测试用
 * @author ronffy
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

class Demo2 extends React.Component {

  render() {
    return (
      <Text style={styles.text}>demo2</Text>
    );
  }
}

export default Demo2

const styles = StyleSheet.create({
  text: {
    paddingTop: 100,
    fontSize: 30,
  },
  
})
