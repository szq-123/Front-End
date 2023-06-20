<template>
  <div>
    Get greeting from My dear Bro: <span class="about-subcomponent-span">{{ greeting }}</span><br>
    <!-- named slots -->
    <slot name="slot1"></slot>

    <!-- anonymous slots -->
    <slot></slot>
    <slot></slot>

    <slot name="slot2"></slot>
    <slot name="slot3"></slot>

    <!-- transmit content to an element using selector -->
    <teleport to="#about-teleport">send me to about!</teleport>
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