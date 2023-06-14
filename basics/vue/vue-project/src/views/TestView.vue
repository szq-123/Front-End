<template>
  <div class="test">
    <button @click="ClickStr">{{ str }}</button>
    <button @click="ClickStr1">{{ str1.display }}</button>
    <button @click="ClickStr2">{{ str2.display }}</button>
    <button @click="ClickNum">show Num</button>
  </div>
</template>

<script setup>
// composition API
import {computed, onMounted, reactive, ref, watch} from "vue";

// can not change data in the template
let str = '你好', displayStr = '你好'
let counter = 0
const ClickStr = function () {
  displayStr = str + counter
  counter++
}

// lifecycle hooks
// compared to options API, usually adding an 'on' to the head of func name.
onMounted(()=>{
  console.log(displayStr)
})

// dynamically render data in the template using `ref`
let str1 = ref({raw: '我好', display: '我好'})
let counter1 = 0
const ClickStr1 = function () {
  str1.value.display = str1.value.raw + counter1
  counter1++
}

// dynamically render data in the template using `reactive`
// `reactive` can only apply to object types.
let str2 = reactive({raw: '她好', display: '她好'})
let counter2 = 0
const ClickStr2 = function () {
  str2.display = str2.raw + counter2
  counter2++
}

let num = 100
const ClickNum = function () {
  num++
  alert(num)
}

let changeStr = computed({
  get() {
  }, set(val) {
  }
})

watch(str2, (newVal, oldVal) => {
  console.log(oldVal, newVal)
}, {immediate: true})

watch(() => str2.display, (newVal, oldVal) => {
  console.log(oldVal, newVal)
}, {deep: true})
</script>

<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
