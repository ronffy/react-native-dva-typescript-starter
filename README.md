
# RN 项目

## 跑ios项目

在项目根目录执行以下命令
```
react-native run-ios
```

## 跑android项目

先打开 Android Studio , 运行模拟器或真机，然后在项目根目录执行以下命令
```
react-native run-android
```


## 相关工具

### Debug JS Remotely

在开发者菜单中选择"Debug JS Remotely"选项，会自动打开调试页面 http://localhost:8081/debugger-ui

### react-devtools

用来查看 react-elements
mac \ window 都可以用

安装
```
npm install -g react-devtools
```

使用
```
react-devtools
```

### react-native-debugger

install 
```
brew update && brew cask install react-native-debugger
```

启动
```
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```


### react-native-windows
（未研究）
仅 window


### 导航

https://reactnavigation.org/docs/zh-Hans/getting-started.html


## ui组件库

[ant-design-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn)
[react-native-elements](https://github.com/react-native-training/react-native-elements)

调调、调调、调调！太有调调了！
我亲亲爱的美女杀手，每次出场都像在走一场巴黎时装秀，

配乐



## 存在问题

1. 装饰器功能未能成功启用

2. Network网络查看功能未实现

3. ～～模拟器切页面较慢～～
解决方法：
选中模拟器 -> Debug -> Slow Animations 取消选中



















下周一分享下入门、上手






## 必备知识点

jsx、生命周期、组件等相关react知识

flex布局