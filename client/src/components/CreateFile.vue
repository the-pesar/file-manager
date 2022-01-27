<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Create File..."
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-input-group>
        <n-input placeholder="Name" :style="{ width: '85%' }"></n-input>
        <n-input placeholder="suffix" :style="{ width: '15%' }"></n-input>
      </n-input-group>
      <template #footer>
        <n-space justify="end">
          <n-button strong secondary type="success">Create</n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script>
import { ref, defineComponent } from "vue";

const showModal = ref(false);

export default defineComponent({
  setup() {
    return { showModal };
  },
});

export { showModal };
</script>