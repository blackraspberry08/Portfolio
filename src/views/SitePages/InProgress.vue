<template>
  <v-container 
    fluid
    fill-height
    class="primary"
  >
    <site-layout :message="message"/>
  </v-container>
</template>

<script>
import SiteLayout from './SiteLayout'

export default {
  name: 'in-progress',
  components: {
    SiteLayout
  },
  computed: {
    message(){
      return "Currently gathering my credentials..."
    }
  }
}
</script>
