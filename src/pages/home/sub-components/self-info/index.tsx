/**
 * @description 个人信息 组件
 */
import React, { memo } from 'react'
import {Form, Input, Select } from 'antd'

import styles from './style.module.scss'
import {SexOption} from 'src/mock/index'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const MyForm: React.FC = () => {

  return (
    <div className={styles['self-info-container']}>
      <Form
        {...layout}
        name="basic"
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '年龄不能为空' }, {type: 'number', message: '请填写数字'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="性别"
          name="sex"
          rules={[{required: true, message: '性别不能为空'}]}
        >
          <Select>
            {
              SexOption.map(item => (
                <Select.Option  value={item.value} key={item.id}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '邮箱不能为空' }, {type: 'email', message: '请输入正确的邮箱'}]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(MyForm)