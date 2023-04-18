<!-- vue2 -->
<script>
export default {
  data() {
    let TextData = 'Hello'
    return {
      TextData,
    }
  },
}
</script>
<!-- vue3 -->
<script>
import { ref } from 'vue'
export default {
  setup() {
    let TextData2 = ref('Hello2')
    return {
      TextData2,
    }
  },
}
</script>

<template></template>

<style scoped></style>
