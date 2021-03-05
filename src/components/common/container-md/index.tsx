import React, { memo, useContext } from 'react'
import MarkDown from 'markdown-to-jsx'
import {ShowMarkdown} from 'src/layout/index'

import styles from './style.module.scss'

interface ListContainerProps {
  content: string
}

const ContainerMd = ({ content }: ListContainerProps) => {
  const useMarkdown = useContext(ShowMarkdown)
  console.log(useMarkdown, ';cc')
  return (
    <div className={styles['list-container']}>
      
      {
        useMarkdown === '1' ?
          <MarkDown>{content}</MarkDown> :
          <div className={styles['linebreak']}>{content}</div>
      }
    </div>
  )
}

export default memo(ContainerMd)
