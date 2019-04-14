/**
 * 路由返回的方法
 * @author ronffy
 */

import { NavigationActions } from 'react-navigation';

export default function getNavBackAction(params: any = {}) {
  return NavigationActions.back(params || undefined)
}