<template>
  <v-fade-transition>
    <v-footer
      app
      class="primary"
    >
      <v-layout>
        <v-spacer/>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <a 
              href="https://github.com/blackraspberry08" 
              target="_blank"
              v-on="on"
            >
              <v-avatar size="32">
                <img src="logo.png" alt="avatar">
              </v-avatar>
            </a>
          </template>
          <v-layout fill-height>
            <v-icon color="white"> mdi-github-circle</v-icon>
            <v-flex align-self-center pl-1>
              <span>View my GitHub</span>
            </v-flex>
          </v-layout>
        </v-tooltip>
      </v-layout>
    </v-footer>
  </v-fade-transition>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>