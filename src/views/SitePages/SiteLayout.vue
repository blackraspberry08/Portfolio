<template>
  <v-layout
    align-center 
    justify-center 
    row 
    fill-height
  >
    <h1 class="display-3">{{ message }}</h1>
  </v-layout>
</template>

<script>
export default {
  name: 'site-layout',
  props: {
    message: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>
<style>
.dev-b{
  border: 1px solid red;
}
</style>