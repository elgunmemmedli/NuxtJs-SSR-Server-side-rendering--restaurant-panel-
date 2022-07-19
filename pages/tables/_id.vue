<template>
  <div>
    <form>
      <p> Table Number {{ $route.params.id }}</p>
      <v-text-field
        v-model="user.name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.user.name.$touch()"
        @blur="$v.user.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.price"
        :error-messages="priceErrors"
        label="Price"
        required
        @input="$v.user.price.$touch()"
        @blur="$v.user.price.$touch()"
      ></v-text-field>
      <v-select
        v-model="user.select"
        :items="user.items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.user.select.$touch()"
        @blur="$v.user.select.$touch()"
      ></v-select>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>

    <v-simple-table class="my-5" >
      <template v-slot:default>
        <caption> Eat List </caption>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Miqdar</th>
            <th class="text-left">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in test" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.select }}</td>
            <td>{{ item.total }} Azn</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    user: {
      name: { required, maxLength: maxLength(10) },
      price: { required, numeric },
      select: { required },
    },
  },

  data: () => ({
    user: {
      name: '',
      price: '',
      select: null,
      items: ['1', '2', '3', '4'],
      tableId : ""
    },
    desserts : ""
  }),

  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.user.select.$dirty) return errors
      !this.$v.user.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.user.name.$dirty) return errors
      !this.$v.user.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.user.name.required && errors.push('Name is required.')
      return errors
    },
    priceErrors() {
      const errors = []
      if (!this.$v.user.price.$dirty) return errors
      !this.$v.user.price.numeric && errors.push('Must be valid ')
      !this.$v.user.price.required && errors.push('Price is required')
      return errors
    },
  },



   async asyncData({ params, redirect }) {
    const mountains = await fetch(
      'https://nuxt-reserv-default-rtdb.firebaseio.com/tables.json'
    ).then((res) => res.json())

    let yeni = [];

    for(let key in mountains){
      mountains[key].id = key;
      yeni.push(mountains[key])
    }

    const filteredMountain = yeni.filter(
      (el) =>
    el.tableId == params.id
    )
    if (filteredMountain) {
      return {
      test :  filteredMountain,
      }
    } else {
      redirect('/')
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      this.user.tableId = this.$route.params.id;
      this.$store.dispatch('store/addUser', this.user)
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.price = ''
      this.select = null
    },
  },
}
</script>


