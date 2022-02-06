<template>
    <div id="start">
        Hi! Welcome to the To-do list webpage. 
        To start using the list, click on the "Start" button. 
        For more information about the webpage, click on "About".
        <button @click="start">Start</button>
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#start {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 20px;
    color: hsl(0, 0%, 0%);
  }
}
</style>