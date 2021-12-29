import React, { Component } from 'react'

// 高阶组件： 接收一个组件，返回一个组件
const hoc = (Cmp) => props => {
  return (
    <div className='border'>
      <Cmp {...props} />
    </div>
  )
}

function Child(props) {
  return <div>child-----{props.name}</div>
}
const Hoc = hoc(Child)

@hoc
class ClassChild extends Component {
  render() {
    return <div>ClassChild-----{this.props.name}</div>
  }
}


export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Hoc name='foo1'></Hoc>
        <ClassChild name='foo2' />
      </div>
    )
  }
}
