import React, { SFC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import Touchable from './Touchable';
import { BaseProps } from '../types/globals';

interface OwnProps {
  text: string | ReactNode;
}

type Props = BaseProps & OwnProps;

const Button: SFC<Props> = function ({ text, children, style, textStyle, ...rest }) {
  return (
    <Touchable style={[styles.button, style]} {...rest}>
      <Text style={[styles.text, textStyle]}>{text || children}</Text>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#037aff',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    color: '#037aff',
  },
})

export default Button
