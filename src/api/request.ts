/*
 * @Description: 请求拦截
 * @Date: 2024-05-09 10:05:59
 * @LastEditTime: 2024-05-09 10:50:26
 */
import Fly from "flyio/dist/npm/wx";
const fly = new Fly;

// 配置请求根域名
fly.config.timeout = 10000;
fly.config.baseURL = "https://sve-uat.mengniu.cn";
// 配置请求拦截器
fly.interceptors.request.use((request) => {
//   request.headers["token"] = uni.getStorageSync("token");
  return request;
});
// 配置响应拦截器
fly.interceptors.response.use(
  (response) => {
    // 如果请求报错
    if (response.data.code != 10000) {
      uni.showToast({
        title: "温馨提示",
        content: response.data.data,
      });
    } else {
      //只将请求结果的data字段返回
      return response.data.data;
    }
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.resolve("网络请求：ERROR！");
  }
);

export default fly