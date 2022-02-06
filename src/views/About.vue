<template>
  <div class="container">
    This is an online to-do list built with vue 3.0. <br> The list enables users to update their to-do task list by: <br> - adding new tasks <br>- marking tasks as complete/incomplete <br>- deleting completed tasks.
  </div>
  <div class="btn">
    <button @click = 'back'>Back to the previous page</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'About',
  setup() {
    let router = useRouter()
    let back = () => {
      router.back()
    }
    return {
      back
    }
  }
})
</script>

<style scoped lang = 'scss'>
  .container {
    margin-top: 10px;
    margin-left: 35%;
    font-size: 15px;
    text-align: left;
    margin-bottom: 15px;
    .btn {
      font-size: 15px;
      height: 25px;
      margin-left: 10px;
    }
  }
</style>