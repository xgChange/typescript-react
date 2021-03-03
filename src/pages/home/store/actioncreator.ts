/**
 * @description action
 */
import { ActionEnums } from './constant'

// 接口
export interface SelfInfoProps {
  username: string
  age: string
  sex: string
  phone: string
  email: string
}

export interface SelfWorkProps {
  company: string
  job: string
  workTime: string[]
  detail: string
}

export interface SelfProjectProps {
  project: string
  job: string
  projectTime: string[]
  detail: string
}

export interface SelfSchoolProps {
  organization: string
  job: string
  workTime: string[]
  detail: string
}

export interface SelfEduProps {
  school: string
  profession: string
  eduLevel: string
  eduTime: string[]
}

export interface ChangeSelfWorkAction {
  type: ActionEnums
  payload: SelfWorkProps[]
}

export interface ChangeSelfInfoAction {
  type: ActionEnums
  payload: SelfInfoProps
}

export interface ChangeSelfProjectAction {
  type: ActionEnums
  payload: SelfProjectProps[]
}

export interface ChangeSelfSchoolAction {
  type: ActionEnums
  payload: SelfSchoolProps[]
}

export interface ChangeSelfEduAction {
  type: ActionEnums
  payload: SelfEduProps[]
}

export interface ChangeSelfSkillAction {
  type: ActionEnums
  payload: string
}

// action
export const changeSelfInfo = (payload: SelfInfoProps): ChangeSelfInfoAction => ({
  type: ActionEnums.ChangeSelfInfo,
  payload,
})

export const changeSelfWork = (payload: SelfWorkProps[]): ChangeSelfWorkAction => ({
  type: ActionEnums.ChangeSelfWork,
  payload,
})

export const changePractice = (payload: SelfWorkProps[]): ChangeSelfWorkAction => ({
  type: ActionEnums.ChangeSelfPractice,
  payload,
})

export const changeSelfProject = (
  payload: SelfProjectProps[]
): ChangeSelfProjectAction => ({
  type: ActionEnums.ChangeSelfProject,
  payload,
})

export const changeSelfSchool = (payload: SelfSchoolProps[]): ChangeSelfSchoolAction => ({
  type: ActionEnums.ChangeSelfSchool,
  payload,
})

export const changeSelfEdu = (payload: SelfEduProps[]): ChangeSelfEduAction => ({
  type: ActionEnums.ChangeSelfEdu,
  payload,
})

export const changeSelfSkill = (payload: string): ChangeSelfSkillAction => ({
  type: ActionEnums.ChangeSelfSkill,
  payload,
})

export const changeSelfAwards = (payload: string): ChangeSelfSkillAction => ({
  type: ActionEnums.ChangeSelfAwards,
  payload,
})
