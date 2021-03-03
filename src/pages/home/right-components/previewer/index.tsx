import React, { memo } from 'react'
import MrakDown from 'markdown-to-jsx'

import styles from './style.module.scss'


const markdown = `
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

const Previewer: React.FC = () => {
  return (
    <div className={styles.previewer}>
      <MrakDown children={markdown} options={{forceBlock: true}} />
    </div>
  )
}

export default memo(Previewer)