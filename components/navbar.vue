<template>
  <v-card
    class="mx-auto"
    height="100%"
    width="300"
  >
    <v-navigation-drawer
      absolute
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="100%"
      permanent
    >
      <v-list>
        <v-list-item
          v-for="([icon, text, path], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
   <NuxtLink :to="path" class="navLink">
          <v-list-item-content>
         <v-list-item-title>{{ text }}</v-list-item-title> 
          </v-list-item-content>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      items: [
        ['mdi-email', 'Index', '/'],
        ['mdi-account-supervisor-circle', 'Eat add', '/add/eatAdd'],
        ['mdi-clock-start', 'Clock-in', '/'],
      ],
    }),
  }
</script>

<style scoped>
.navLink{
  color: #fff !important;
  text-decoration: none !important;
}
</style>