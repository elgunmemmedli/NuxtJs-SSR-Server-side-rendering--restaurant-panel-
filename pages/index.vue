<template>
  <v-row justify="start"  align="start">
    <v-col  cols="8"   sm="6" md="8">
      <v-card :loading="loading" v-for="item of tables" :key="item.id" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title> {{item.name}} </v-card-title>

        <v-divider class="mx-4"></v-divider>

   
         <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            <NuxtLink :to="{
      name : 'tables-id',
      params : {
        id : item.id
      }
     }" >   Reserve
      </NuxtLink>
          </v-btn>
        </v-card-actions>
      
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    tables: [{ name: 'Table 1', id:1}, { name: 'Table 2', id:2}, { name: 'Table 3', id:3}],
  }),

  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>