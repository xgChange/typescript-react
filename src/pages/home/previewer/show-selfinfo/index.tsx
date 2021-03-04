import React, { memo, PropsWithChildren } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { SelfInfoProps } from 'src/pages/home/store'
import { ReducerMap } from 'src/store/reducer'
import styles from './style.module.scss'
import { PositionClass } from 'src/utils'

type selfInfoKey = keyof SelfInfoProps

interface ShowInfoProps {
  position?: 'left' | 'right' | 'center'
}

const ShowSelfInfo = ({ position = 'center' }: PropsWithChildren<ShowInfoProps>) => {
  const { selfInfo } = useSelector(
    (state: ReducerMap) => ({
      selfInfo: state.selfInfo,
    }),
    shallowEqual
  )
  const keys = Object.keys(selfInfo)
  return (
    <div className={`${styles['show-self-info']} ${PositionClass[position]}`}>
      {keys.map((key: selfInfoKey) => (
        <p key={key}>{key === 'age' ? selfInfo[key] + '岁' : selfInfo[key]}</p>
      ))}
      {keys.length > 0 && <Divider style={{ margin: '12px 0 12px 0' }} />}
    </div>
  )
}

export default memo(ShowSelfInfo)
