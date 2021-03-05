import React, { memo, PropsWithChildren } from 'react'
import {Menu} from 'antd'
import { CheckOutlined} from '@ant-design/icons'
import {SettingMenuItem } from 'src/utils/index'
import styles from './style.module.scss'

interface MyDropDownProp {
  menuData?: any[]
  onChangeKey?: (key: string) => void
}

const handleItemContent = (item: SettingMenuItem) => {
  if (item.type === 'check') {
    return (
      <>
        <CheckOutlined style={{ color: `${item.value === '0' ? '#000' : 'green'}` }} />
        <span style={{ color: `${item.value === '0' ? '#000' : 'green'}` }}>{item.content}</span>
      </>
    )
  }
  return item.content
}

const MyMemu = ({ menuData = [], onChangeKey }: PropsWithChildren<MyDropDownProp>) => {
  const onClick = ({ key }: any) => {
    onChangeKey && onChangeKey(key)
  }
  return (
    <Menu onClick={onClick} className={styles['my-menu']}>
      {
        menuData.map(item => (
          <Menu.Item key={item.id} className={styles['menu-item']}>{handleItemContent(item)}</Menu.Item>
        ))
      }
    </Menu>
  )
}

export default memo(MyMemu)