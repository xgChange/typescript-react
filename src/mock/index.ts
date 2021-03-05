/**
 * @description 一些mock数据
 */

import { PanelDataObj, SettingMenuItem } from '../utils/interface'

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
    type: 'SelfWork',
  },
  {
    id: 1003,
    text: '项目经历',
    icon: '',
    type: 'SelfProject',
  },
  {
    id: 1004,
    text: '教育背景',
    icon: '',
    type: 'SelfEducation',
  },
  {
    id: 1005,
    text: '实习经历',
    icon: '',
    type: 'SelfPractice',
  },
  {
    id: 1006,
    text: '获奖情况',
    icon: '',
    type: 'SelfAwards',
  },
  {
    id: 1007,
    text: '个人技能',
    icon: '',
    type: 'SelfSkill',
  },
  {
    id: 1008,
    text: '校园经历',
    icon: '',
    type: 'SelfSchool',
  },
]

export const SexOption = [
  {
    id: 100,
    name: '男',
    enName: 'man',
    value: '男',
  },
  {
    id: 101,
    name: '女',
    enName: 'women',
    value: '女',
  },
]

export const eduOption = [
  {
    id: 110,
    name: '博士后',
    value: '博士后',
  },
  {
    id: 111,
    name: '博士',
    value: '博士',
  },
  {
    id: 112,
    name: '硕士',
    value: '硕士',
  },
  {
    id: 113,
    name: '本科',
    value: '本科',
  },
  {
    id: 114,
    name: '专科',
    value: '专科',
  },
  {
    id: 115,
    name: '高中',
    value: '高中',
  },
  {
    id: 116,
    name: '初中',
    value: '初中',
  },
  {
    id: 117,
    name: '小学',
    value: '小学',
  },
]


export const settingMenu: SettingMenuItem[] = [
  {
    id: 120,
    content: 'markdown语法',
    type: 'check',
    value: '0'
  }
]