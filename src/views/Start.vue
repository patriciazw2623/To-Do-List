<template>
    <div class="start">
        Hi! Welcome to the To-do list webpage. 
    </div>
    <div class="start">
        To start using the to-do list, click on the "Start" button. 
    </div>
    <div class="start">
        For more information about the webpage, click on "About".
    </div>
    <div class="btn">
        <button  @click="start">Start</button>
        &nbsp;
        <button @click="about">About</button>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useRouter } from 'vue-router'
    export default defineComponent({
    name: 'Start',
    setup() {
        let router = useRouter()
        let start = () => {
            router.push({
                path: '/home'
            })
        }
        let about = () => {
            router.push({
                path: '/about'
            })
        }
        return {
            start, about
        }
    }
    })
</script>



<style scoped lang = 'scss'>
  .start {
    font-size: 15px;
    margin-bottom:6px;
    .btn {
      margin-top: 10px;
      font-size: 15px;
      height: 25px;
    }
  }
</style>