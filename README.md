
# 同桌项目 deskmate

## 项目资料

1. [项目地址](http://172.16.117.13/fe-team/deskmate)
2. [字段名称](http://172.16.117.20:8090/pages/viewpage.action?pageId=2858606)

## 技术介绍

1. 用[dva](https://dvajs.com/guide/)管理状态，引入了[dva-loading](https://www.npmjs.com/package/dva-loading)处理loading状态
2. 用[React Navigation](https://reactnavigation.org/docs/zh-Hans/getting-started.html)做路由，通过[react-navigation-redux-helpers](https://github.com/react-navigation/react-navigation-redux-helpers)将路由交给`redux`统一管理
3. 用[typescript](https://www.tslang.cn/docs/home.html)做代码的静态检查，项目中已经对组件、model、方法等写好了demo，有疑问联系 王海荣
4. 用fetch发网络请求，在此基础上加了字符串模版引擎，方便对接 RESTful 接口，还加了拦截器功能，方便处理服务端各种不同的状态码和失败的业务处理。

## 安装项目

安装依赖（npm 亦可，但避免使用cnpm，容易出现不可意料的问题）
```
yarn
```

链接`antd`的字体图标
```
react-native link @ant-design/icons-react-native
```

安装`react-native-debugger`
```
brew update && brew cask install react-native-debugger
```


## 跑ios项目

在项目根目录执行以下命令
```
npm run ios
```



## 跑android项目

先打开 Android Studio , 运行模拟器或真机，然后在项目根目录执行以下命令
```
npm run android
```

## 开启对应菜单
在模拟器上分别开启`Debug JS Remotely`、`Enbug Live Reload`、`Enable Hot Reloading`;


## 相关工具介绍

!! 本项目使用的是`react-native-debugger`

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


## 导航

[React Navigation](https://reactnavigation.org/docs/zh-Hans/getting-started.html)
+
[react-navigation-redux-helpers](https://github.com/react-navigation/react-navigation-redux-helpers)


## ui组件库

!! 本项目使用`ant-design-mobile-rn`

[ant-design-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn)
[react-native-elements](https://github.com/react-native-training/react-native-elements)


## 存在问题

1. 装饰器功能未能成功启用

2. Network网络查看功能未实现

3. ~~模拟器切页面较慢~~  
解决方法：
选中模拟器 -> Debug -> Slow Animations 取消选中

