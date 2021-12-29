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

## 实现 Form.createForm

### 了解`rc-rom`
> 自动实现表单数据的收集的高阶函数
1. 引入`createForm`
2. 注入参数 `getFieldDecorator('username')(<input placeholder='Username'>)`
3. 提交使用`const {getFieldsValue} = this.props.form`

> **注意**：此时在`render`中打印`props`,发现表单中某一项数据改变，就会重新`render`整个`form`表单，实际上我们只需要让变化的输入框发生更新(局部更新)

### 手写`my-rc-form`
1. 创建一个`createForm`高阶组件
2. 给`props`上增加一个`form`，
- `getFieldsValue`
- `setFieldsValue`
- `getFeildDecorator`
- `validateFields`

