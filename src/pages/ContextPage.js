import React, { Component } from 'react'
import { ThemeProvider } from '../Context'
import ContextTypePage from './ContextTypePage'
import UserContextPage from './UserContextPage'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: {
        themeColor: 'red',
      }
    }
  }
  changeColor = () => {
    const { themeColor } = this.state.theme
    this.setState({
      themeColor: themeColor === 'red' ? 'green' : 'red'
    })
  }
  render() {
    const { theme } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>toggle</button>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <UserContextPage />
        </ThemeProvider>
      </div>
    )
  }
}
