/**
 * Demo 页面，测试用
 * @author ronffy
 */

import React, { ReactNode } from 'react';
import DemoCompt from '../components/DemoCompt';
import { View, StyleSheet, Text } from 'react-native';
import { Button, InputItem } from '@ant-design/react-native';
import { connect, DispatchProp, MapStateToPropsParam } from 'react-redux';
import { NavigationActions } from '../utils';
import { WholeState } from '../types/globals';

interface StateProps {
  name: string | ReactNode;
  age: number;
  loading: boolean;
}
interface OwnProps {
}
type Props = DispatchProp & StateProps & OwnProps;

type State = {
  nameInput: string;
}

class Demo extends React.PureComponent<Props, State> {
  
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
    const { dispatch } = this.props;
    const { nameInput } = this.state;
    dispatch({
      type: 'demo/saveText',
      payload: {
        name: nameInput
      }
    })
  }

  onPressRouteBtn = () => {
    this.props.dispatch(NavigationActions.navigate({
      routeName: 'Detail'
    }));
  }

  onPressAge = (age: number) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'demo/updateState',
      payload: {
        age
      }
    })
  }

  render() {
    const { age, name, loading } = this.props;
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
          disabled={loading}
          type="primary"
        >
          <Text>确定</Text>
        </Button>
        <DemoCompt style={styles.nameText} name={name} />

        {/* 年龄处理 */}
        <Text
          style={styles.textAge}
          onPress={this.onPressAge.bind(this, age + 1)}
        >
          点我年龄加1：{age}
        </Text>

      </View>
    );
  }
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, WholeState> = ({ demo, loading }: WholeState) => ({
  name: demo.name,
  age: demo.age,
  loading: loading.effects['demo/saveText']
})

export default connect(mapStateToProps)(Demo)

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
