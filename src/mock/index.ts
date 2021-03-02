/**
 * @description 一些mock数据
 */

import {PanelDataObj} from '../utils/interface'

export const NavPanelData: PanelDataObj[] = [
  {
    id: 1001,
    text: '基本信息',
    icon: '',
    type: 'SelfInfo',
  },
  {
    id: 1002,
    text: '工作经历',
    icon: '',
    type: 'SelfWork'
  },
  {
    id: 1003,
    text: '项目经历',
    icon: '',
    type: 'SelfProject'
  },
  {
    id: 1004,
    text: '教育背景',
    icon: '',
    type: 'SelfEducation'
  },
  {
    id: 1005,
    text: '实习经历',
    icon: '',
    type: 'SelfPractice'
  },
  {
    id: 1006,
    text: '获奖情况',
    icon: '',
    type: 'SelfAwards'
  },
  {
    id: 1007,
    text: '个人技能',
    icon: '',
    type: 'SelfSkill'
  }
]

export const SexOption = [
  {
    id: 100,
    name: '男',
    enName: 'man',
    value: 1
  },
  {
    id: 101,
    name: '女',
    enName: 'women',
    value: 0
  }
]