<script setup lang="ts">
import Sider from './components/Sider.vue'
</script>

<template>
  <a-layout class="main">
    <a-layout-sider theme="light"><Sider></Sider></a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff">Header</a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  height: 100vh;
}
</style>
