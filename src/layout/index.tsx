import React, { createContext, memo, useState } from 'react'
import MyHeader from '../components/my-header'
import MyHome from '../pages/home'

export const ResumName = createContext('')
export const ShowMarkdown = createContext('0')

export default memo(function index() {
  const [resumName, setResumName] = useState('')
  const [useMarkdown, setMarkdown] = useState('0')

  const getInputValue = (val: string) => {
    setResumName(val)
  }
  const getMenuChangeData = (val: string) => {
    setMarkdown(val)
  }
  return (
    <div className="top-bot-layout">
      <MyHeader onInputValue={getInputValue} onMenuChange={getMenuChangeData}/>
      {/* 以后这里填 renderRoutes */}
      <ResumName.Provider value={resumName}>
        <ShowMarkdown.Provider value={useMarkdown}>
          <div className="main-container">
            <MyHome />
          </div>
        </ShowMarkdown.Provider>

      </ResumName.Provider>
      
    </div>
  )
})
