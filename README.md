assets目录 所有的静态资源
patches目录 打补丁目录
scripts目录 （实现一些自动化操作，辅助脚本）
src目录

工具
patch-package (打补丁工具)

npm i patch-package (如果需要更新第三方内容)
or
yarn add patch-package postinstall-postinstall

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

## 目录结构

```
├── android
├── assets // 静态资源
├── index.js // 入口文件
├── ios
├── patches // 第三方打补丁文件
├── scripts // 自动化辅助脚本
├── src
│   ├── components           # 组件
│   ├── routers              # 路由
│   ├── screens              # 全屏页面组建
│   ├── reduxState           # redux
│   │     ├──reducers
│   │     ├──actions.js
│   │     ├──store.js
│   │     └──selectors.js
│   ├── types                # 类型声明
│   └── utils                # 辅助函数，常量，配置等
│         ├──navService.js
│         ├──constants.js
│         ├──config.js
│         └──request.js
└── App.js
```

备注

// 暗号：建立清晰规范的数据处理流程