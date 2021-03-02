/**
 * @description 一些公共的接口
 */

import {componentType} from 'src/utils/index'


// interface
export interface PanelDataObj {
  id: number
  text: string
  icon?: string
  type?: componentType
}