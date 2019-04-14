/**
 * 字符串模版引擎
 * @param tpl 模版字符串
 * @param data 注入模版中的数据
 * @author ronffy
 */

export default function strTemplate(tpl: string, data?: any): string {
  if (!data) {
    return tpl;
  }
  return tpl.replace(/{(.*?)}/g, (match, key) => data[key.trim()]);
}
