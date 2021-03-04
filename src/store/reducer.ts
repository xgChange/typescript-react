import { combineReducers } from 'redux'
import {
  selfInfoReducer,
  selfWorkReducer,
  selfProjectReducer,
  selfSchoolReducer,
  selfEduReducer,
  selfPracticeReducer,
  selfSkillReducer,
  selfAwardsReducer,
  SelfInfoProps,
  SelfWorkProps,
  SelfEduProps,
  SelfSchoolProps,
  SelfProjectProps,
} from 'src/pages/home/store'

export interface ReducerMap {
  selfInfo: SelfInfoProps
  selfSkill: string
  selfAwards: string
  selfPractice: SelfWorkProps[]
  selfEdu: SelfEduProps[]
  selfSchool: SelfSchoolProps[]
  selfProject: SelfProjectProps[]
  selfWork: SelfWorkProps[]
}

export default combineReducers({
  selfInfo: selfInfoReducer,
  selfWork: selfWorkReducer,
  selfProject: selfProjectReducer,
  selfSchool: selfSchoolReducer,
  selfEdu: selfEduReducer,
  selfPractice: selfPracticeReducer,
  selfSkill: selfSkillReducer,
  selfAwards: selfAwardsReducer,
})
