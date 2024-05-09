/*
 * @Description: 校验正则
 * @Date: 2022-11-14 10:54:48
 * @LastEditTime: 2024-05-09 15:09:02
 */
// 校验数字
export function validateNum(val: string) {
  const regStr = /^\d+$/
  return val && regStr.test(val)
}

// 校验电话
export function validatePhone(val: string) {
  const regStr = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
  return val && regStr.test(val)
}
