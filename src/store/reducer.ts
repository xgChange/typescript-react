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
  SelfInfoProps
} from 'src/pages/home/store'

export interface ReducerMap {
  selfInfo: SelfInfoProps
  
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
