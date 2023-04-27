<script>
export default {
  data() {
    let count = 0
    let text = ''
    return {
      count,
      text,
    }
  },
  methods: {
    IncreaseCount: function () {
      this.count++
    },
  },
  watch: {
    count: function (newValue, oldValue) {
      console.log(newValue, oldValue)
      this.text = `${oldValue}에서 ${newValue}로 변경되었습니다.`
    },
  },
}
</script>

<template>
  <p>{{ count }}</p>
  <p>{{ text }}</p>
  <button @click="IncreaseCount">+1</button>
</template>

<style scoped></style>
