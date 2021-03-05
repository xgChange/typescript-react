import React, { ChangeEvent, memo, PropsWithChildren, useCallback, useState } from 'react'

import MySvg from '../svg/index'
import styles from './style.module.scss'
import { Input, message, Dropdown } from 'antd'
import {SettingOutlined} from '@ant-design/icons'
import {settingMenu} from 'src/mock'
import MyMenu from 'src/components/my-menu'
import { SettingMenuItem} from 'src/utils'

interface MyHeaderProps {
  onInputValue?: (val: string) => void
  onMenuChange?: (val: any) => void
}

export default memo(function index({ onInputValue, onMenuChange }: PropsWithChildren<MyHeaderProps>) {
  console.log('header')
  const [menuData, setMenuData] = useState<SettingMenuItem[]>(settingMenu)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value) {
      return message.error('请填写简历名称')
    }
    onInputValue && onInputValue(value)
  }

  const onChangeKey = (key: string) => {
    const newData = menuData.map(item => {
      if (item.id === parseInt(key)) {
        if (key === '120') {
          const changeValue = item.value === '0' ? '1' : '0'
          onMenuChange && onMenuChange(changeValue)
          return {...item, value: changeValue}
        }
      }
      return item
    })
    setMenuData(newData)
  }

  const showMenu = useCallback(() => {
    return <MyMenu menuData={menuData} onChangeKey={onChangeKey}/>
  }, [menuData])

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
        <Dropdown overlay={showMenu}>
          <SettingOutlined className={styles['setting']} />
        </Dropdown>
      </div>
    </div>
  )
})
