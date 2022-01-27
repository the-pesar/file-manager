<template>
  <create-file></create-file>
  <n-space justify="space-between">
    <n-space>
      <n-button tertiary circle @click="arrowBack">
        <template #icon>
          <n-icon><ChevronBackOutline /></n-icon>
        </template>
      </n-button>
      <n-breadcrumb style="margin-top: 5px">
        <template v-for="(p, i) in pwd" :key="i">
          <n-breadcrumb-item @click="findPath(i)">{{ p }}</n-breadcrumb-item>
        </template>
      </n-breadcrumb>
    </n-space>
    <n-space style="margin-top: -1px">
      <n-input type="text" size="small" placeholder="Search between files..." />
      <n-button type="primary" size="small" @click="showModal = true"
        >Create +</n-button
      >
    </n-space>
  </n-space>
</template>

<script setup>
import { ChevronBackOutline } from "@vicons/ionicons5";
import { path, getContent } from "@/views/Files.vue";
import CreateFile, { showModal } from "@/components/CreateFile.vue";
import { computed } from "vue";

const pwd = computed(() => path.value.split("/"));

const arrowBack = () => findPath(pwd.value.length - 2);

const findPath = (index) => {
  let tmp = "";
  for (let i = index; i > -1; i--) {
    tmp = pwd.value[i] + "/" + tmp;
  }
  getContent(tmp.slice(0, tmp.length - 1));
};
</script>
