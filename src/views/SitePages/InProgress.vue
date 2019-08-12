<template>
  <v-container 
    fluid
    fill-height
    class="primary"
  >
    <site-layout>
      <vue-svg-draw
        ref="vuesvg" 
        file='/svg/coming_soon.svg' 
        type="delayed"
        pathTiming="EASE"
        :duration="duration" 
      />
    </site-layout>
  </v-container>
</template>

<script>
import SiteLayout from './SiteLayout'
import vueSvgDraw from 'vue-svg-draw'

export default {
  name: 'in-progress',
  components: {
    SiteLayout,
    vueSvgDraw
  },
  computed:{
    duration(){
      return 400
    }
  }
}
</script>
