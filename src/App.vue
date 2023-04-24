<script>
// Vue3
import { ref, reactive } from 'vue'
export default {
  setup() {
    // ref와 reactive 어떤 것으로 반응형 데이터를 만들어도 상관없다.

    // ref는 모든 값 가능
    // 값을 바꿀 때는 .value
    let NumData = ref(0)

    // ref로 객체
    let NumData2 = ref({
      foo: 'ref 안녕',
      bar: 0,
    })

    // reactive는 복합 데이터만. obj 형태
    // 값을 바꿀 때는 바로 (.value X)
    let Data = reactive({
      foo: 'reactive 안녕',
      bar: 0,
    })

    const ChangeNumData = () => {
      NumData.value++
    }

    const ChangeNumData2 = () => {
      NumData2.value.bar++
    }

    const ChangeData = () => {
      Data.bar++
    }

    return {
      NumData,
      NumData2,
      Data,
      ChangeNumData,
      ChangeNumData2,
      ChangeData,
    }
  },
}
</script>

<template>
  <p @click="ChangeNumData">
    {{ NumData }}
  </p>

  <p @click="ChangeNumData2">
    {{ NumData2 }}
  </p>

  <p @click="ChangeData">
    {{ Data }}
  </p>
</template>

<style scoped></style>
