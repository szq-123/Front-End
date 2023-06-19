<template>
  <div>
    The AboutSubcomponent: <span class="about-subcomponent-span">{{ msg }}</span><br>
    <button @click="deliverNum">Deliver num to parent</button>
    <br>
    Beam to Brother! <input v-model="Greet" @input="beamToBrother">
  </div>
</template>

<script>
import mitt from "@/utils/bus";

export default {
  name: "AboutSubcomponent",

  // variables gotten from parental components.
  props: ['msg'],

  data() {
    return {
      num: 10,
      greeting: ''
    }
  },

  methods: {
    deliverNum() {
      this.$emit('parent', this.num)
    },
    beamToBrother() {
      mitt.emit('brother', this.Greet)
    }
  },

  computed: {
    Greet: {
      get() {
        return this.greeting
      },
      set(val) {
        this.greeting = val
      }
    }
  }
}
</script>

<style scoped>
.about-subcomponent-span {
  color: red;
}
</style>