import React, { memo, PropsWithChildren, useCallback } from 'react'

import { Collapse } from 'antd'
import TitleCom from 'src/components/title-com'
const {Panel} = Collapse

import styles from './style.module.scss'
import {PanelDataObj} from 'src/utils/interface'
import {showComponentByType} from 'src/utils/index'

interface PanelProps {
  panelData: PanelDataObj[]
}

const EditoPanel = (props: PropsWithChildren<PanelProps>) => {
  const { panelData = [] } = props
  
  const handleChange = useCallback((key: string | string[]) => {
    console.log('change', key)
  }, [])
  return (
    <div className={styles['editor-panel']}>
      <Collapse bordered={false} defaultActiveKey={['1001']} onChange={(key: string | string[]) => handleChange(key)}>
        {
          panelData.map(item => (
            <Panel header={<TitleCom text={item.text} />} key={item.id}>
              {
                item.type && showComponentByType(item.type)
              }
            </Panel>
          ))
        }
      </Collapse>
    </div>
  )
}

export default memo(EditoPanel)