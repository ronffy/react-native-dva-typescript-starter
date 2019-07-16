import React, { SFC } from 'react';
import { TouchableOpacity } from 'react-native';
import { BaseProps } from '../types/globals';

const Touchable: SFC<BaseProps> = props => <TouchableOpacity activeOpacity={0.8} {...props} />

export default Touchable
