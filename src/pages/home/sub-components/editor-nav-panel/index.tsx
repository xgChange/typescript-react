import React, { memo, PropsWithChildren, useCallback } from 'react'

import { Collapse } from 'antd'
import TitleCom from '../../../../components/title-com'
const {Panel} = Collapse

import styles from './style.module.scss'
import {PanelDataObj} from '../../../../utils/interface'

interface PanelProps {
  panelData: PanelDataObj[]
}

const EditoPanel = (props: PropsWithChildren<PanelProps>) => {
  const { panelData = [] } = props
  
  const handleChange = useCallback(() => {
    console.log('change')
  }, [])
  return (
    <div className={styles['editor-panel']}>
      <Collapse defaultActiveKey={['1001']} onChange={() => handleChange()}>
        {
          panelData.map(item => (
            <Panel header={<TitleCom text={item.text} />} key={item.id}>
              <p>{item.text}</p>
            </Panel>
          ))
        }
        
      </Collapse>,
    </div>
  )
}

export default memo(EditoPanel)