export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './storage'

export { default as strTemplate } from './strTemplate'

export { default as request } from './request'

export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const createAction = (type: string) => (payload?: any) => ({ type, payload })
