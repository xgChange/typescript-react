import React, { memo } from 'react'

import styles from './style.module.scss'

const Previewer: React.FC = () => {
  return (
    <div className={styles.previewer}>
      这是previewer
    </div>
  )
}

export default memo(Previewer)