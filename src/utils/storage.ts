/*
 * @Description: storage ts
 * @Date: 2024-05-09 15:04:53
 * @LastEditTime: 2024-05-09 15:07:20
 */

const getStorage = (key: string) => {
  return uni.getStorage(key);
};

const setStorage = (key: string, val: string) => {
  uni.setStorage(key, val);
};

const removeStorage = (key: string) => {
  uni.removeStorage(key);
};

export { getStorage, setStorage, removeStorage };
