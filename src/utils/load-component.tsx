/**
 * @description 加载自定义组件
 */
import React from 'react'

import SelfInfo from 'src/pages/home/left-components/self-info'
import SelfEducation from 'src/pages/home/left-components/self-education'

enum EnumComponetName {
  SelfInfo = 'SelfInfo',
  SelfWork = 'SelfWork',
  SelfProject = 'SelfProject',
  SelfEducation = 'SelfEducation',
  SelfPractice = 'SelfPractice',
  SelfAwards = 'SelfAwards',
  SelfSkill = 'SelfSkill',
}

export type componentType = keyof typeof EnumComponetName

export function showComponentByType(type: componentType): React.ReactNode {
  switch (type) {
    case EnumComponetName.SelfInfo:
      return <SelfInfo />
    case EnumComponetName.SelfEducation:
      return <SelfEducation />
    default:
      return ''
  }
}
