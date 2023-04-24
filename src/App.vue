<script>
// Vue3
import { ref } from 'vue'
export default {
  setup() {
    let NumData = ref(0)

    const PlusMethod = () => {
      // this를 사용하지 않기 때문에 화살표 함수 OK
      // 반응형 데이터를 위해 ref를 썼는데,
      // ref는 내부적으로 객체처럼 값을 다루기 때문에 .value로 접근
      NumData.value++
    }

    return {
      NumData,
      PlusMethod,
    }
  },
}

/* Vue2
export default {
  data() {
    let NumData = 0
    return {
      NumData,
    }
  },
  methods: {
    PlusMethod: function () {
      // this에 접근해야 하기 때문에 화살표 함수 사용 X
      this.NumData++
    },
  },
}
*/
</script>

<template>
  <button @click="PlusMethod">{{ NumData }}</button>
</template>

<style scoped></style>
