<script setup></script>

<template>
  <ul>
    <li><routerLink :to="{ name: 'Main' }">Main</routerLink></li>
    <li>
      <routerLink :to="{ name: 'List', params: { test: 'test' } }">
        List
      </routerLink>
    </li>
    <li><routerLink :to="{ name: 'Upload' }">Upload</routerLink></li>
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
