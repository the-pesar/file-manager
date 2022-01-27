<template>
  <n-card embedded content-style="padding: 10px;" :bordered="false">
    <div class="options-file">
      <n-icon>
        <EllipsisHorizontalOutline />
      </n-icon>
    </div>

    <div class="container">
      <n-icon size="95"><FolderOpenOutline /></n-icon>
      <p class="name-file">{{ name }}</p>
      <p class="size-file">{{ size }}</p>
    </div>
  </n-card>
</template>

<script setup>
import {
  EllipsisHorizontalOutline,
  FolderOpenOutline,
} from "@vicons/ionicons5";
import { defineProps } from "vue";

defineProps({
  name: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.sass";

.n-card {
  display: flex;
  max-width: 160px;
  border-radius: 15px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: none;
  border: 1px solid transparent;
  &:hover {
    background-color: rgba(24, 160, 88, 0.2);
    border: 1px solid rgba(24, 160, 88, 0.5);
  }
  p {
    padding: 0 !important;
    margin: 0 !important;
  }
  .options-file {
    text-align: end !important;
    margin: 0 5px;
    .n-icon {
      cursor: pointer;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .name-file {
      padding-top: 10px !important;
      font-weight: 500;
    }
    .size-file {
      color: #b3b3b3;
    }
    .n-icon {
      text-align: center;
    }
  }
}
</style>