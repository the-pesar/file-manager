<template>
  <div class="prof-container">
    <n-avatar
      size="large"
      :style="{
        color: 'white',
        backgroundColor: 'orange',
        fontWeight: 600,
      }"
      >L</n-avatar
    >
    <div class="prof-detauls">
      <p class="prof-name">Linux@Pear#d4km</p>
      <p class="prof-os">ubuntu v20.4</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'

.prof-container
    display: flex
    align-items: center
    height: 60.5px
    border-bottom: 1.5px solid $border
    padding-left: 10px
    .prof-detauls
        margin-left: 10px
        p
            margin: 0px !important
        p.prof-name
            font-weight: 600
</style>