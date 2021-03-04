/**
 * @description reducer
 */
import {
  ChangeSelfInfoAction,
  SelfInfoProps,
  SelfWorkProps,
  ChangeSelfWorkAction,
  SelfProjectProps,
  ChangeSelfProjectAction,
  ChangeSelfSchoolAction,
  SelfSchoolProps,
  SelfEduProps,
  ChangeSelfEduAction,
  ChangeSelfSkillAction,
} from './actioncreator'
import { ActionEnums } from './constant'

const SelfInfo = {} as SelfInfoProps
const SelfWorks = [] as SelfWorkProps[]
const SelfProject = [] as SelfProjectProps[]
const SelfSchool = [] as SelfSchoolProps[]
const SelfEdu = [] as SelfEduProps[]
const SelfPractice = [] as SelfWorkProps[]
const SelfSkill = ''
const SelfAwards = ''

export function selfInfoReducer(
  state: SelfInfoProps = SelfInfo,
  action: ChangeSelfInfoAction
): SelfInfoProps {
  switch (action.type) {
    case ActionEnums.ChangeSelfInfo:
      return Object.assign({ ...state }, action.payload) // 这里需要用 拓展语法和Object.assign一起使用
    default:
      return state
  }
}

export function selfWorkReducer(
  state: SelfWorkProps[] = SelfWorks,
  action: ChangeSelfWorkAction
): SelfWorkProps[] {
  switch (action.type) {
    case ActionEnums.ChangeSelfWork:
      return action.payload
    default:
      return state
  }
}

export function selfPracticeReducer(
  state: SelfWorkProps[] = SelfPractice,
  action: ChangeSelfWorkAction
): SelfWorkProps[] {
  switch (action.type) {
    case ActionEnums.ChangeSelfPractice:
      return action.payload
    default:
      return state
  }
}

export function selfProjectReducer(
  state: SelfProjectProps[] = SelfProject,
  action: ChangeSelfProjectAction
): SelfProjectProps[] {
  switch (action.type) {
    case ActionEnums.ChangeSelfProject:
      return action.payload
    default:
      return state
  }
}

export function selfSchoolReducer(
  state: SelfSchoolProps[] = SelfSchool,
  action: ChangeSelfSchoolAction
): SelfSchoolProps[] {
  switch (action.type) {
    case ActionEnums.ChangeSelfSchool:
      return action.payload
    default:
      return state
  }
}

export function selfEduReducer(
  state: SelfEduProps[] = SelfEdu,
  action: ChangeSelfEduAction
): SelfEduProps[] {
  switch (action.type) {
    case ActionEnums.ChangeSelfEdu:
      return action.payload
    default:
      return state
  }
}

export function selfSkillReducer(
  state = SelfSkill,
  action: ChangeSelfSkillAction
): string {
  switch (action.type) {
    case ActionEnums.ChangeSelfSkill:
      return action.payload
    default:
      return state
  }
}

export function selfAwardsReducer(
  state = SelfAwards,
  action: ChangeSelfSkillAction
): string {
  switch (action.type) {
    case ActionEnums.ChangeSelfAwards:
      return action.payload
    default:
      return state
  }
}
