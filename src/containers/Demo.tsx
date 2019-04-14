/**
 * Demo 页面，测试用
 * @author ronffy
 */

import React from 'react';
import DemoCompt from '../components/DemoCompt';
import { View, StyleSheet, Text } from 'react-native';
import { Button, InputItem } from '@ant-design/react-native';
import { connect, DispatchProp, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { fetchName, addage } from '../actions/globals';
import { BaseProps, WholeState } from '../types/globals';

interface StateProps {
  name: string;
  age: number;
}
interface OwnProps {
}
interface DispatchProps {
  onSubmitText: (value: string) => void;
}
type Props = DispatchProp & BaseProps & OwnProps;

type State = {
  nameInput: string;
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, WholeState> = ({ globals }: WholeState) => ({
  name: globals.name,
  age: globals.age
});
const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: any) => ({
  onSubmitText(value: string) {
    dispatch(fetchName(value))
  },
  onPressAge(age: number) {
    dispatch(addage(age))
  }
});

class Demo extends React.Component<Props, State> {
  
  state = {
    nameInput: '',
  }

  static getDerivedStateFromProps(nextProps: Props, preState: State) {
    if (!preState.nameInput) {
      return {
        nameInput: nextProps.name
      }
    }
    return null;
  }

  onChangeInput = (value: string) => {
    this.setState({
      nameInput: value
    })
  }

  onPressBtn = () => {
    const { onSubmitText } = this.props;
    const { nameInput } = this.state;
    onSubmitText(nameInput);
  }

  onPressRouteBtn = () => {
    this.props.navigation.navigate('Demo2');
  }

  render() {
    const { age, name, onPressAge } = this.props;
    const { nameInput } = this.state;
    return (
      <View style={styles.container}>

        {/* 姓名处理 */}
        <InputItem
          value={nameInput}
          placeholder="请输入姓名"
          style={styles.textInput}
          onChange={this.onChangeInput}
        />
        <Button
          style={styles.button}
          onPress={this.onPressBtn}
          type="primary"
        >
          <Text>确定</Text>
        </Button>
        <DemoCompt style={styles.nameText} name={name} />

        {/* 年龄处理 */}
        <Text
          style={styles.textAge}
          onPress={onPressAge.bind(this, age + 1)}
        >
          点我年龄加1：{age}
        </Text>

      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 100,
    backgroundColor: '#e6fffb'
  },
  textInput: {
    height: 40,
    borderColor: '#666',
    borderWidth: 1,
    padding: 10
  },
  nameText: {
    marginTop: 15
  },
  button: {
    padding: 10,
    marginTop: 15,
  },
  textAge: {
    fontSize: 16,
    marginTop: 15
  }
})
