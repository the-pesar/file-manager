<template>
  <n-card content-style="padding: 0;" embedded :bordered="false">
    <div class="container-menu">
      <div class="item-menu">
        <b>Create File</b>
      </div>
      <div class="item-menu">
        <b>Create Directory</b>
      </div>
    </div>
  </n-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {  },
});
</script>

<style lang="scss" scoped>
.n-card {
  width: 125px;
}

.container-menu {
  .item-menu {
    padding: 5px;
  }
}
</style>