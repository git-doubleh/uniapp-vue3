/*
 * @Description: 
 * @Date: 2024-05-09 10:23:39
 * @LastEditTime: 2024-05-09 10:39:42
 */
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const count = 0
	function increment(params:type) {
		this.count++
	}
	return {
		count,
		increment
	}
});
