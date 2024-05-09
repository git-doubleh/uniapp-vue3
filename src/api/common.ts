/*
 * @Description: 
 * @Date: 2024-05-09 10:19:51
 * @LastEditTime: 2024-05-09 10:49:35
 */
import fly from './request'

export function getTest () {
    return fly.get('a')
}