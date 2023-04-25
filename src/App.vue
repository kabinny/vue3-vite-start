<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const a = ref(0)
    const plusOne = computed(() => a.value + 1)

    console.log(plusOne.value)
    // plusOne.value++
    // activity.esm-bundler.js:1188 Write operation failed: computed value is readonly

    return {
      a,
      plusOne,
    }
  },
}

/* vue 2
export default {
  data() {
    return {
      a: 0,
    }
  },
  computed: {
    plusOne: function () {
      return this.a + 1
    },
  },
}
*/
</script>

<template>
  <div>a: {{ a }}</div>
  <div>plusOne: {{ plusOne }}</div>
</template>

<style scoped></style>
