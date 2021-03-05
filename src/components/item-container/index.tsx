import React, { memo, PropsWithChildren } from 'react'
import { Divider } from 'antd'

import { filterObj } from 'src/utils/index'
import ContainerMd from 'src/components/common/container-md'
import TitleHeader from 'src/components/common/title-header'
import ListItemHeader from 'src/components/common/list-item-header'

import styles from './style.module.scss'

interface ItemContainerProps {
  itemData?: any[]
  title?: string
}

const ItemContainer = ({itemData = [], title = ''}: PropsWithChildren<ItemContainerProps>) => {
  const gapPaddingClass = itemData.length > 1 ? 'gap-padding' : ''

  return (
    <>
      {itemData.length > 0 && (
        <div className={styles['item-container']}>
          <TitleHeader title={title} />
          <div className={`${styles['content']}`}>
            {itemData.map((item, index) => (
              <div className={`${gapPaddingClass}`} key={index}>
                {<ListItemHeader headerData={filterObj(item, 'detail')} />}
                <ContainerMd content={item['detail']} />
              </div>
            ))}
          </div>
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ItemContainer)