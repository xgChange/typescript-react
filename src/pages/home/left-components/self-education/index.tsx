/**
 * @description 教育信息组件
 */

import React, { memo } from 'react'

import { Form, Input, Select, Button, DatePicker } from 'antd'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'

import styles from './style.module.scss'
import { eduOption } from 'src/mock/index'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const SelfEducation: React.FC = () => {
  const finished = (values: any) => {
    if (values.eduTime && values.eduTime.length > 0) {
      const startTime = moment(values.eduTime[0]).format('YYYY-MM')
      const endTime = moment(values.eduTime[1]).format('YYYY-MM')
      const forMatInfo = Object.assign(
        { ...values },
        {
          eduTime: [startTime, endTime],
        }
      )
      console.log(values, forMatInfo)
    }
  }
  return (
    <div className={styles['self-education']}>
      <Form {...layout} name="basic" onFinish={finished}>
        <Form.Item label="学校" name="school" rules={[{ required: true, message: '学校不能为空' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="专业" name="profession" rules={[{ required: true, message: '专业不能为空' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="学历" name="eduLevel" rules={[{ required: true, message: '学历不能为空' }]}>
          <Select>
            {eduOption.map((item) => (
              <Select.Option value={item.value} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="eduTime"
          label="在校时间"
          rules={[{ type: 'array' as const, required: true, message: '时间不能为空!' }]}
        >
          <DatePicker.RangePicker locale={locale} picker="month" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            完成
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(SelfEducation)
