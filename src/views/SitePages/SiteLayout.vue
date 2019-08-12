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
import mojs from '@mojs/core'

export default {
  name: 'site-layout',
  props: {
    message: {
      type: String,
      required: false,
      default: undefined
    }
  },
  data: () => ({
    burstShape: undefined,
    bubbleShape: undefined,
  }),
  mounted(){
    this.burstShape = new mojs.Burst({
      radius: { 0: 30 },
      angle: 'rand(0, 360)',
      timeline: {delay: 0},
      children: {
        shape: 'line',
        stroke: 'white',
        fill: 'none',
        scale: 1,
        scaleX: { 1: 0 },
        easing: 'cubic.out',
        duration: 2000
      }
    }),
    this.bubbleShape = new mojs.Burst({
      radius: 28,
      count: 3,
      timeline: { delay: 100 },
      children: {
        stroke: 'white',
        fill: 'none',
        scale: 1,
        strokeWidth: { 8: 0 },
        radius: { 0 : 'rand(6, 10)' },
        degreeShift: 'rand(-50, 50)',
        duration: 800,
        delay: 'rand(0, 250)',
      }
    })
    let top = Math.floor(Math.random() * 100) + '%'
    let left = Math.floor(Math.random() * 100) + '%'
    let position = {top, left}
    this.burstShape.tune(position).generate().replay()
    this.bubbleShape.tune(position).generate().replay()
  }
}
</script>
<style>
.dev-b{
  border: 1px solid red;
}
</style>