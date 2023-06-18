<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">Count is: {{ count }}</button>
    <br><br>
    computed: {{changeStr}}
    <br><br>
    <input v-model="changeStr">
    <br><br>
    <!-- bind msg-->
    <AboutSubcomponent :msg="msg"></AboutSubcomponent>
  </div>
</template>

<script>
// options API, usually used in Vue2.
// export a component combines multiple options.
import AboutSubcomponent from "@/components/AboutSubcomponent.vue";

export default {
  // specify subcomponents.
  components: {AboutSubcomponent},

  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      cal: 0,
      msg: "Message delivered from About to AboutSubcomponent",
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks
  // are called at different stages of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  },

  computed: {
    changeStr : {
      get(){
        return this.cal
      },
      set(val){
        this.cal = val
      }
    }
  }
}
</script>

<style>
/*@media (min-width: 1024px) {*/
/*  .about {*/
/*    min-height: 100vh;*/
/*    display: flex;*/
/*    align-items: center;*/
/*  }*/
/*}*/
</style>
