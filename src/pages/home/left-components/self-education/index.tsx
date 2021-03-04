/**
 * @description 教育信息组件
 */

import React, { Fragment, memo, useState, useCallback } from 'react'

import { Form, Input, Select, Button, DatePicker } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'

import styles from './style.module.scss'
import { eduOption } from 'src/mock/index'
import { useDispatch } from 'react-redux'
import { changeSelfEdu, SelfEduProps } from '../../store/index'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const SelfEducation: React.FC = () => {
  const [formData, setFormData] = useState<SelfEduProps[]>([])
  const [formCountArr, setFormCountArr] = useState<string[]>([])
  const dispatch = useDispatch()

  const finished = useCallback(
    (values: any, index: number) => {
      if (values.eduTime && values.eduTime.length > 0) {
        const startTime = moment(values.eduTime[0]).format('YYYY/MM')
        const endTime = moment(values.eduTime[1]).format('YYYY/MM')
        const forMatInfo = Object.assign(
          { ...values },
          {
            eduTime: [startTime, endTime],
          }
        )
        setFormData(() => {
          let newData = [...formData]
          if (formData[index]) {
            newData[index] = forMatInfo
          } else {
            newData = [...formData, forMatInfo]
          }
          console.log('eduData', newData)
          dispatch(changeSelfEdu(newData))
          return newData
        })
      }
    },
    [formData, dispatch]
  )

  const addEduForm = useCallback(() => {
    setFormCountArr([...formCountArr, `${Math.random()}${Date.now()}`])
  }, [formCountArr])

  const delForm = useCallback(
    (index: number) => {
      const newData = formData.filter((item, k) => k !== index)
      dispatch(changeSelfEdu(newData))
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
              label="学校"
              name="school"
              rules={[{ required: true, message: '学校不能为空' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="专业"
              name="profession"
              rules={[{ required: true, message: '专业不能为空' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="学历"
              name="eduLevel"
              rules={[{ required: true, message: '学历不能为空' }]}
            >
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
              rules={[
                { type: 'array' as const, required: true, message: '时间不能为空!' },
              ]}
            >
              <DatePicker.RangePicker locale={locale} picker="month" />
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

export default memo(SelfEducation)
