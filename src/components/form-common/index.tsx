/**
 * @description 教育信息组件
 */

import React, { Fragment, memo, PropsWithChildren, useCallback, useState } from 'react'

import { Form, Input, Button, DatePicker } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'

import styles from './style.module.scss'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

interface FormConfig {
  field: string[]
  label: string[]
  onFinished: (values: any) => void
}

const FormCommon = ({ field, label, onFinished }: PropsWithChildren<FormConfig>) => {
  const [formCountArr, setFormCountArr] = useState<string[]>([])
  const [formData, setFormData] = useState<any[]>([])

  const finished = useCallback(
    (values: any, index: number) => {
      const time = values[field[2]]
      if (time && time.length > 0) {
        const startTime = moment(time[0]).format('YYYY/MM')
        const endTime = moment(time[1]).format('YYYY/MM')
        const forMatInfo = Object.assign(
          { ...values },
          {
            [field[2]]: [startTime, endTime],
          }
        )
        setFormData(() => {
          let newData = [...formData]
          if (formData[index]) {
            newData[index] = forMatInfo
          } else {
            newData = [...formData, forMatInfo]
          }
          onFinished(newData)
          return newData
        })
      }
    },
    [formData]
  )

  const addEduForm = useCallback(() => {
    setFormCountArr([...formCountArr, `${Math.random()}${Date.now()}`])
  }, [formCountArr])

  const delForm = useCallback(
    (index: number) => {
      const newData = formData.filter((item, k) => k !== index)
      onFinished(newData)
      setFormData(newData)
      setFormCountArr(formCountArr.filter((item, k) => k !== index))
    },
    [formCountArr]
  )

  return (
    <div className={styles['self-education']}>
      {formCountArr.map((item, index) => (
        <Fragment key={item}>
          <MinusCircleOutlined
            className={styles['del-btn']}
            onClick={() => delForm(index)}
          />
          <Form {...layout} name={item} onFinish={(values) => finished(values, index)}>
            <Form.Item
              label={label[0]}
              name={field[0]}
              rules={[{ required: true, message: `${label[0]}不能为空` }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={label[1]}
              name={field[1]}
              rules={[{ required: true, message: `${label[1]}不能为空` }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={field[2]}
              label={label[2]}
              rules={[
                {
                  type: 'array' as const,
                  required: true,
                  message: `${label[2]}不能为空!`,
                },
              ]}
            >
              <DatePicker.RangePicker locale={locale} picker="month" />
            </Form.Item>

            <Form.Item
              name="detail"
              label="详细描述"
              rules={[{ required: true, message: `详细内容不能为空` }]}
            >
              <Input.TextArea
                placeholder="请输入内容"
                autoSize={{ minRows: 3, maxRows: 12 }}
                showCount
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                完成
              </Button>
            </Form.Item>
          </Form>
        </Fragment>
      ))}
      <Button
        type="dashed"
        block
        style={{ background: 'transparent', color: '#e5e5e5' }}
        onClick={addEduForm}
      >
        新增
      </Button>
    </div>
  )
}

export default memo(FormCommon)
