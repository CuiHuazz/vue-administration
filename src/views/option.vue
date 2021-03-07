<template>
  <div>
    option
    <el-button @click="index++">{{ index }}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    }
  }
}
</script>

<style>
</style>