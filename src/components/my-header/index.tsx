import React, { ChangeEvent, memo, PropsWithChildren, useState } from 'react'

import MySvg from '../svg/index'
import styles from './style.module.scss'
import { Input, message, Dropdown, Menu } from 'antd'
import { SettingOutlined, CheckOutlined } from '@ant-design/icons'
import { settingMenu } from 'src/mock'
import { SettingMenuItem } from 'src/utils'

interface MyHeaderProps {
  onInputValue?: (val: string) => void
  onMenuChange?: (val: any) => void
}

const handleItemContent = (item: SettingMenuItem) => {
  if (item.type === 'check') {
    const activedClass = item.value === '1' ? styles['actived'] : ''
    return (
      <>
        <CheckOutlined className={activedClass} />
        <span className={activedClass}>{item.content}</span>
      </>
    )
  }
  return item.content
}

export default memo(function index({
  onInputValue,
  onMenuChange,
}: PropsWithChildren<MyHeaderProps>) {
  const [menuData, setMenuData] = useState<SettingMenuItem[]>(settingMenu)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value) {
      return message.error('请填写简历名称')
    }
    onInputValue && onInputValue(value)
  }

  const onChangeKey = ({ key }: any) => {
    const newData = menuData.map((item) => {
      if (item.id === parseInt(key)) {
        if (key === '120') {
          const changeValue = item.value === '0' ? '1' : '0'
          changeValue === '1' && message.success('已启用markdown语法')
          onMenuChange && onMenuChange(changeValue)
          return { ...item, value: changeValue }
        }
      }
      return item
    })
    setMenuData(newData)
  }

  const menu = (
    <Menu onClick={onChangeKey} className={styles['menu-container']}>
      {menuData.map((item) => (
        <Menu.Item key={item.id} className={styles['menu-item']}>
          {handleItemContent(item)}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-left']}>
        <MySvg iconName="PROFILE" />
        <span className={styles.title}>简历编辑</span>
      </div>
      <div className={`${styles['header-middle']} all-center`}>
        <div className={`${styles['middle-input']} all-center`}>
          <label>简历名称：</label>
          <Input size="middle" onBlur={handleChange} />
        </div>
      </div>
      <div className={`${styles['header-right']} all-center`}>
        <Dropdown overlay={menu} trigger={['click']}>
          <SettingOutlined className={styles['setting']} />
        </Dropdown>
      </div>
    </div>
  )
})
