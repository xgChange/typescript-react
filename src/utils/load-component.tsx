/**
 * @description 加载自定义组件
 */
import React from 'react'

import SelfInfo from 'src/pages/home/left-components/self-info'
import SelfEducation from 'src/pages/home/left-components/self-education'
import SelfWork from 'src/pages/home/left-components/self-work'
import SelfProject from 'src/pages/home/left-components/self-project'
import SelfPractice from 'src/pages/home/left-components/self-practice'
import SelfSchool from 'src/pages/home/left-components/self-school'
import SelfSkill from 'src/pages/home/left-components/self-Skill'
import SelfAwards from 'src/pages/home/left-components/self-awards'

enum EnumComponetName {
  SelfInfo = 'SelfInfo',
  SelfWork = 'SelfWork',
  SelfProject = 'SelfProject',
  SelfEducation = 'SelfEducation',
  SelfPractice = 'SelfPractice',
  SelfAwards = 'SelfAwards',
  SelfSkill = 'SelfSkill',
  SelfSchool = 'SelfSchool'
}

export type componentType = keyof typeof EnumComponetName

export function showComponentByType(type: componentType): React.ReactNode {
  switch (type) {
    case EnumComponetName.SelfInfo:
      return <SelfInfo />
    case EnumComponetName.SelfEducation:
      return <SelfEducation />
    case EnumComponetName.SelfWork:
      return <SelfWork />
    case EnumComponetName.SelfProject:
      return <SelfProject />
    case EnumComponetName.SelfPractice:
      return <SelfPractice />
    case EnumComponetName.SelfSchool:
      return <SelfSchool />
    case EnumComponetName.SelfSkill:
      return <SelfSkill />
    case EnumComponetName.SelfAwards:
      return <SelfAwards/>
    default:
      return ''
  }
}
