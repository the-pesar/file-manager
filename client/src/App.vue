<template>
  <router-view />
</template>

<script>
import { ref, defineComponent } from "vue";

const windowHeight = ref(window.innerHeight);
export default defineComponent({
  setup() {
    window.addEventListener("resize", () => {
      windowHeight.value = window.innerHeight;
    });
  },
});

export { windowHeight };
</script>

<style lang="sass">
</style>
