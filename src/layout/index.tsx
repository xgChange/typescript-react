import React, { memo } from 'react'
import MyHeader from '../components/my-header'
import MyHome from '../pages/home'

export default memo(function index() {
  return (
    <div className="top-bot-layout">
      <MyHeader />
      {/* 以后这里填 renderRoutes */}
      <div className="main-container">
        <MyHome />
      </div>
    </div>
  )
})
