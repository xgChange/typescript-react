import React, { memo } from 'react'

import styles from './style.module.scss'
import EditorNav from './sub-components/editor-nav'
import Previewer from './sub-components/previewer'

const PageHome: React.FC = () => {
  return (
    <div className={styles['main-content']}>
      <EditorNav />
      <Previewer />
    </div>
  )
}

export default memo(PageHome)
