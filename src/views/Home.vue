<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Adopt a new best friend.</h1>
    <button v-on:click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <b-form v-on:submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group
        id="input-group-1"
        label="Pet's Name:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="formData.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Species:"
        label-for="input-2"
      >
        <b-form-select
          id="input-2"
          v-model="formData.species"
          v-bind:options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      showPetForm: false,
      formData: {
        name:'',
        species: null,
        age: 0
      },
      
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    // toggle為切換的意思
    togglePetForm: function(){
      this.showPetForm = !this.showPetForm
    },
    handleSubmit: function(){
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
    }
  }
}
</script>
