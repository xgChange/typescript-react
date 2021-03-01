import React, { memo, PropsWithChildren, useEffect, useState } from 'react'
import styles from './style.module.scss'

interface TestProps {
  name: string
  age: number
  sex: string
}

const MyTest = ({ name, age, sex }: PropsWithChildren<TestProps>) => {
  const [state, setState] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setState('10')
    }, 2000)
  }, [])
  return (
    <div className={styles.container}>
      我是MyTest组件
      <div>
        {/*  */}
        name: {name} | age: {age} | sex: {sex} | state: {state}
      </div>
    </div>
  )
}

MyTest.defaultProps = {
  name: 'xmx',
  age: 18,
  sex: 'man'
} as Partial<TestProps>

export default memo(MyTest)