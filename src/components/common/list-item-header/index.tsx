import React, { Fragment, memo } from 'react'

import MySvg from 'src/components/svg'
import styles from './style.module.scss'
import ContainerMd from 'src/components/common/container-md'

interface HeaderProps {
  headerData: any
  icon?: string
}

const handleArr = function (item: string | string[]) {
  if (typeof item === 'string') {
    return item
  }
  if (Object.prototype.toString.call(item) === '[object Array]') {
    return item.join(' - ')
  }
  return ''
}

const ListItemHeader = ({ headerData, icon }: HeaderProps) => {
  return (
    <div className={styles['list-item-header']}>
      {Object.keys(headerData)
        .reverse()
        .map((key: any, index: number) => (
          <Fragment key={key}>
            {index === 0 && icon && <MySvg iconName={icon} />}
            {/* <span>{handleArr(headerData[key])}</span> */}
            <ContainerMd content={handleArr(headerData[key])} />
          </Fragment>
        ))}
    </div>
  )
}

export default memo(ListItemHeader)
