<template>
  <div>
    <v-container>
      <!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <navbar></navbar>
  </v-navigation-drawer>

  <v-app-bar app>
    <h4> Resturant Admin panel </h4>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
    </v-container>
  </div>
</template>