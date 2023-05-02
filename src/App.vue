<script setup>
// 1. 모든 데이터 타입을 전달할 수 있는가
// 2. object, boolean 특별한 사용법
// 3. props 유효성 검사
// 4. function을 props로 보낼 때 유의해야 할 사항
import HelloWorld from './components/HelloWorld.vue'

let StringData = '안녕'
let NumberData = 123
let ArrayData = ['a', 'b', 'c']
let BooleanData = true
let objectData = {
  foo: 'hello',
  bar: 'vue!',
}
</script>

<template>
  <HelloWorld :propsData="StringData" />
  <HelloWorld :propsData="NumberData" />
  <HelloWorld :propsData="ArrayData" />
  <HelloWorld :propsData="BooleanData" />
  <HelloWorld :propsData="objectData" />
</template>

<style></style>
