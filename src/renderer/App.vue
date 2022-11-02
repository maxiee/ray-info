<script setup lang="ts">
window.electron.ipcRenderer.send('message', 'Hello from App.vue!');
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#root, body, html {
  height: 99%;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>