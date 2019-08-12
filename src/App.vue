<template>
  <v-app dark>
    <nprogress-container/>
    <v-content>
      <router-view
        class="smooth-opacity fast"
        :style="{ opacity: 1 }"
      />
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import AppFooter from '@/components/app/AppFooter'

export default {
  name: 'app',
  components: {
    NprogressContainer,
    AppFooter
  }
}
</script>

<style>
  .smooth-opacity {
    transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 0.2s !important;
  }
</style>