<script setup></script>

<template>
  <ul>
    <li><router-link to="/">Main</router-link></li>
    <li><router-link to="/list">List</router-link></li>
    <li><router-link to="/upload">Upload</router-link></li>
  </ul>
</template>

<style>
ul {
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.active {
  cursor: default;
  font-weight: bold;
}

li {
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
}

li:nth-of-type(1) {
  margin: 0;
}
</style>
