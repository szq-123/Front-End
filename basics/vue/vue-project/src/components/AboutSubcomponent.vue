<template>
  <div>
    The AboutSubcomponent: <span id="about-subcomponent-span">{{ msg}}</span>
  </div>
</template>

<script>
export default {
  name: "AboutSubcomponent",

  // variables gotten from parental components.
  props: ['msg'],
}
</script>

<style scoped>
#about-subcomponent-span {
  color: red;
}
</style>