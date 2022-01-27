<template>
  <n-menu :options="menuOptions" style="margin-top: 10px" default-value="1" />
</template>

<script setup>
import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  FolderOpenOutline,
  SettingsOutline,
  TerminalOutline,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h("a", {}, "Files"),
    key: "1",
    icon: renderIcon(FolderOpenOutline),
  },
  {
    label: () => h("a", {}, "Terminal"),
    key: "2",
    icon: renderIcon(TerminalOutline),
  },
  {
    label: () => h("a", {}, "Settings"),
    key: "3",
    icon: renderIcon(SettingsOutline),
  },
];
</script>
<style lang="sass" scoped>
</style>