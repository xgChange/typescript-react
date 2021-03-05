/**
 * @description 一些工具函数
 */

export * from './load-component'
export * from './interface'

export const phonePattern = /^[1]([3-9])[0-9]{9}$/
export const numberPattern = /^([1-9]\d?|1[01]\d|120)$/

interface SelfObject  {
  [index: string]: any
}

export function filterObj<T extends SelfObject, K extends keyof T>(obj: T, key: K): any {
  const keys = Object.keys(obj).filter((item) => item !== key)
  return keys.reduce((cur, next) => {
    return { ...cur, [next]: obj[next] }
  }, {})
}
