# Context 

## 使用
### 创建 
**Context.js**
```javascript
import React from 'react'

export const ThemeContext = React.createContext()
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer
```
### 生产 
**ContextPage.js**
```javascript
<ThemeProvider value={theme}>
  <ContextTypePage />
  <UserContextPage />
</ThemeProvider>
```
### 消费
1. 类组件 
  - `static contextType`
  - `Consumer`
2. 函数组件 
  - `Consumer`
  - `useContext`

## 优点和缺点
1. 优点：适合**子孙组件数据传递**
2. 缺点：**耗费性能**，父组件传递的数据更新，会引起所有子组件的重新渲染，慎用
