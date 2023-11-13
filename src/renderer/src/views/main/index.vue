<template>
  <div class="main">
    这个是主窗口
    <Button @click="setwindow">setwindow</Button>
  </div>
</template>

<script setup>
function setwindow() {
  window.electron.ipcRenderer.send("setWindowSize")
}
</script>

<style lang="scss" scoped></style>
