<!--
 * @Description: 
 * @Date: 2024-05-09 09:03:23
 * @LastEditTime: 2024-05-09 15:44:53
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">{{ counter.count }}</text>
    </view>
    <button @click="handleTest">测试</button>
    <input class="weui-input" auto-focus placeholder="将会获取焦点"/>
    <button @click="handleNavi">跳转</button>
    <i class="iconfont icontiaobo"></i>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { getTest } from '@/api/common'

const counter = useCounterStore()

const title = ref('Hello world')

const handleTest = () => {
  uni.showToast({
    title: 'error',
    icon: 'none'
  })
  getTest()
}

const handleNavi = () => {
  uni.navigateTo({
    url: '/pages/test/index'
  })
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: $color;
}
</style>
