<template>
  <div class="test">
    <button @click="ClickStr">{{ str }}</button>
    <button @click="ClickStr1">{{ str1.display }}</button>
    <button @click="ClickStr2">{{ str2.display }}</button>
    <button @click="ClickNum">show Num</button>
    <br>
    <router-link to="/">Jump to homepage</router-link>
    <br>
    <button @click="goAbout">Jump to About page</button>
    <br>

    <ul>
      <li v-for="(item,index) in tabList" :key="index" @click="changeTab(index)">{{ item.name }}</li>
    </ul>
    <component :is="curComponent.com"></component>

    <TestAsyncSub></TestAsyncSub>
    <div ref="target">
      <TestAsyncSub1 v-if="targetIsVisible"></TestAsyncSub1>
    </div>
  </div>
</template>

<script setup>
// composition API, usually used in Vue3.
import {useIntersectionObserver} from '@vueuse/core'
import {computed, defineAsyncComponent, markRaw, onMounted, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import TestSub from "@/components/TestSub.vue";
import TestSub1 from "@/components/TestSub1.vue";
import TestAsyncSub from "@/components/TestAsyncSub.vue";

// asynchronous component
const TestAsyncSub1 = defineAsyncComponent(() => {
  import('@/components/TestAsyncSub1.vue')
})

// can not change data in the template
let str = '你好', displayStr = '你好'
let counter = 0
const ClickStr = function () {
  displayStr = str + counter
  counter++
}

// lifecycle hooks
// compared to options API, usually adding an 'on' to the head of func name.
onMounted(() => {
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

// creat link
let router = useRouter()
let route = useRoute()
const goAbout = () => {
  router.push('/about')
}

// dynamic component
let tabList = ref([
  {name: 'TestSub', com: markRaw(TestSub)},
  {name: 'TestSub1', com: markRaw(TestSub1)}
])
let curComponent = ref({com: tabList.value[0].com})
const changeTab = (index) => {
  if (index < tabList.value.length) {
    curComponent.value.com = tabList.value[index].com
  }
}

const target = ref(null)
const targetIsVisible = ref(false)

const {stop} = useIntersectionObserver(
    target,
    ([{isIntersecting}], observerElement) => {
      targetIsVisible.value = isIntersecting
    },
)
</script>

<style>
/*@media (min-width: 1024px) {*/
/*  .test {*/
/*    min-height: 100vh;*/
/*    display: flex;*/
/*    align-items: center;*/
/*  }*/
/*}*/
</style>
