<template>
  <v-layout
    align-center 
    justify-center 
    row 
    fill-height
  >
    <v-spacer/>
    <v-flex>
      <h1 class="display-3" v-if="message">{{ message }}</h1>
      <slot/>
    </v-flex>
    <v-spacer/>
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
  },
}
</script>