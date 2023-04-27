<script>
export default {
  data() {
    let count = 0
    let watchCount = 2
    return {
      count,
      watchCount,
    }
  },
  methods: {
    IncreaseCount: function () {
      this.count++
    },
  },
  computed: {
    getDouble: function () {
      return this.count * 2
    },
  },
  watch: {
    count: function (newValue) {
      this.watchCount = newValue * 2
    },
  },
}
</script>

<template>
  <p>원본 값: {{ count }}</p>
  <p>computed: {{ getDouble }}</p>
  <p>watch: {{ watchCount }}</p>
  <button @click="IncreaseCount">+1</button>
</template>

<style scoped></style>
