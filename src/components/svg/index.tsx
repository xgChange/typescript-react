/**
 * @description 封装通用的svg组件
 */

import React, { memo } from 'react'

import styles from './style.module.scss'
require('../../assets/icons/iconfont.js')

interface SvgProps {
  iconName: string
}

const MySvg = ({ iconName }: React.PropsWithChildren<SvgProps>) => {
  return (
    <svg className={styles['my-icon']} aria-hidden="true">
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  )
}

export default memo(MySvg)
