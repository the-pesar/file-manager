<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider :content-style="`height: ${height}px;`">
        <profile-demo></profile-demo>
        <left-menu></left-menu>
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <path-header></path-header>
        </n-layout-header>
        <n-layout-content
          :content-style="`height: ${height - 120}px; padding: 10px`"
        >
          <router-view></router-view>
        </n-layout-content>
        <n-layout-footer>Chengfu Road</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import { windowHeight as height } from "@/App.vue";
import ProfileDemo from "@/components/ProfileDemo.vue";
import LeftMenu from "@/components/Menu.vue";
import PathHeader from "@/components/PathHeader.vue";
</script>
<style lang="sass">
@import "@/assets/variables.sass"

.n-layout-header
  background-color: $gray
  padding: 13.3px
.n-layout-footer
  background-color: $gray
  padding: 16px

.n-layout-header
  border-bottom: 1.5px solid $border

.n-layout-sider
  background-color: $white
  border-right: 1.5px solid $border

.n-layout-footer
  border-top: 1.5px solid $border

.n-layout-content
  background-color: $white
</style>