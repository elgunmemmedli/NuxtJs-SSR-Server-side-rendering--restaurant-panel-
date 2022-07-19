
<template>
  <v-container fluid>
     <button @click="$fetch">Refresh</button>
    <div v-if="$fetchState.pending" > 
  loading...
</div>

  <div v-if="$fetchState.error" > 
Xeta bas verdi
</div>

   <v-simple-table class="my-5" v-else >

      <template v-slot:default>
        <caption> Eat List </caption>
        <thead>
          <tr>
              <th class="text-left">Table Number</th>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Miqdar</th>
            <th class="text-left">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
              <td>Table {{ item.tableId }}  </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.select }}</td>
            <td>{{ item.total }} Azn</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      items: "",
      desserts : ""
    }),



  async fetch() {
      this.desserts = await fetch(
        'https://nuxt-reserv-default-rtdb.firebaseio.com/tables.json'
      ).then(res => res.json())
    },
      fetchOnServer: true,
      fetchDelay: 100,


  }
</script>