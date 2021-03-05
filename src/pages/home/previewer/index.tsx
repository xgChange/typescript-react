import React, { memo, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

import ShowSelfInfo from './show-selfinfo/index'
import ShowSelfSkill from './show-selfskill'
import ShowSelfWork from './show-selfwork'
import ShowSelfEdu from './show-selfedu'
import ShowSelfAwards from './show-selfawards'
import ShowSelfProject from './show-selfproject'
import ShowSelfPractice from './show-selfpractice'
import ShowSelfSchool from './show-selfschool'

const Previewer: React.FC = () => {
  const contentRef = useRef(null)
  const handleClick = useReactToPrint({
    content: () => contentRef.current,
  })
  return (
    <div className={styles.previewer}>
      <div className={styles['top-title']}>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="middle"
          className={styles['previewer-btn']}
          onClick={handleClick}
        >
          下载
        </Button>
      </div>

      <div className={styles.container} ref={contentRef}>
        <ShowSelfInfo position="center" />
        <div className={`${styles['main-content']} print-content`}>
          <ShowSelfEdu />
          <ShowSelfSkill />
          <ShowSelfWork />
          <ShowSelfProject />
          <ShowSelfPractice />
          <ShowSelfSchool />
          <ShowSelfAwards />
        </div>
      </div>
    </div>
  )
}

export default memo(Previewer)
