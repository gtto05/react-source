import React, { Component } from 'react'
// import { createForm } from 'rc-form'

import Input from '../components/Input'
import createForm from '../components/my-rc-form'

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

// @createForm()
@createForm
class MyRcForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form
    console.log('submit', getFieldsValue());
    validateFields((err, val) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('校验成功', val);
      }
    })
  }
  render() {
    console.log('props', this.props);
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>MyRcForm</h3>
        {getFieldDecorator('username', { rules: [nameRules] })(<Input placeholder='Username' />)}
        {getFieldDecorator('password', { rules: [passworRules] })(<Input placeholder='Password' />)}
        <button onClick={this.submit}>submit</button>
      </div >
    )
  }
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    setFieldsValue({ username: 'default' })
  }
}

export default MyRcForm