<template>
  <div>
    Get greeting from My dear Bro: <span class="about-subcomponent-span">{{ greeting }}</span>
  </div>
</template>

<script setup>
// transmit message between brother components.
// child A -> parent -> child B
// bus.js
// plugin `mitt`. npm install mitt

import mitt from "@/utils/bus";
import {onBeforeMount, ref} from "vue";

let greeting = ref('')
mitt.on('brother', (g) => {
  greeting.value = g
})
</script>

<style scoped>
.about-subcomponent-span {
  color: red;
}
</style>