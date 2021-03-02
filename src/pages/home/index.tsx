import React, { memo } from 'react'

import styles from './style.module.scss'
import EditorNav from './left-components/editor-nav'
import Previewer from './right-components/previewer'

const PageHome: React.FC = () => {
  return (
    <div className={styles['main-content']}>
      <EditorNav />
      <Previewer />
    </div>
  )
}

export default memo(PageHome)
