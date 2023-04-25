<script setup>
import { ref } from 'vue'

let message = ref('')
let messageLazy = ref('')

let multiLineMessage = ref('')
let checked = ref(false)
let selected = ref('')
let checkedNames = ref([])
</script>

<template>
  <!-- on input -->
  <input v-model="message" placeholder="여기를 수정해보세요" type="text" />
  <p>message: {{ message }}</p>
  <!-- on change -->
  <input v-model.lazy="messageLazy" type="text" />
  <p>message: {{ messageLazy }}</p>

  <hr />

  <textarea
    v-model="multiLineMessage"
    placeholder="여러줄을 입력해보세요"
  ></textarea>
  <p style="white-space: pre-line">{{ multiLineMessage }}</p>
  <hr />

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <hr />

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
  <hr />

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <br />
  <span>Checked names: {{ checkedNames }}</span>
</template>

<style scoped></style>
