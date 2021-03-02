import React, {memo} from 'react'

import { Tabs } from 'antd'
import TitleCom from 'src/components/title-com'
import NavPanel from '../editor-nav-panel'
const {TabPane} = Tabs

import styles from './style.module.scss'
import {NavPanelData} from 'src/mock/index'

const MyEditorNav: React.FC = () => {
  return (
    <div className={styles['editor-nav-container']}>
      <Tabs tabPosition="left" className={styles['editor-tabs']}>
        <TabPane tab={<TitleCom text="编辑简历" icon="bianji" />} key="1">
          <NavPanel panelData={NavPanelData} />
        </TabPane>
        <TabPane tab={<TitleCom text="我的简历" icon="wode" />} key="2">
          这是我的简历
        </TabPane>
      </Tabs>
    </div>
  )
}

export default memo(MyEditorNav)
