# Hoc

## 使用

1. 创建一个函数 hoc
2. 接收一个组件，返回一个组件
3. 装饰器使用及配置
```bash
yarn add @craco/craco
yarn add 
```
```javascript
// craco.config.js
module.exports = {
  babel:{
    plugins:[
      ['@babel/plugin-proposal-decorators',{legacy:true}]
    ]
  }
}
```
> **问题：** 有时候不配置.babelrc还是会提示不识别装饰器 ?  
```json
// .babelrc
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```
