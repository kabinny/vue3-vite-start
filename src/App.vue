<script setup>
const submitFunc = (event) => {
  // event.preventDefault()
  console.log('폼 제출됨!')
}

const enterFunc = () => {
  console.log('엔터키 누름!')
}
</script>

<template>
  <form @submit.prevent="submitFunc" action="/test" method="get">
    <textarea @keydown.enter="enterFunc"></textarea>
    <br />
    <button type="submit">제출</button>
  </form>
</template>

<style scoped></style>
