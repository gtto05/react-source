# Context 使用

## 创建 
**Context.js**
```javascript
import React from 'react'

export const ThemeContext = React.createContext()
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer
```
## 生产 
**ContextPage.js**
```javascript
<ThemeProvider value={theme}>
  <ContextTypePage />
  <UserContextPage />
</ThemeProvider>
```
## 类组件消费
**ContextTypePage.js**
```javascript
import React, { Component } from 'react'
import { ThemeContext } from '../Context'

export default class ContextTypePage extends Component {
  static contextType = ThemeContext
  render() {
    const { themeColor } = this.context
    return (
      <div className='border'>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}
```
## 函数组件消费 `Consumer`
**UserContextPage.js**
```javascript
import { ThemeConsumer } from "../Context";

export default function UserContextPage() {
  return (
    <div className="border">
      <ThemeConsumer>
        {
          ({ themeColor }) => {
            return <h3 className={themeColor}>UserContextPage</h3>
          }
        }
      </ThemeConsumer>
    </div>
  )
}
```
## 函数组件消费`useContext`
**UserContextPage.js**
```javascript
import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

// 函数式组件useContext取数据
export default function UserContextPage() {
  const context = useContext(ThemeContext)
  const { themeColor } = context
  return (
    <div className='border'>
      <h3 className={themeColor}>UserContextPage</h3>
    </div>
  )
}
```

