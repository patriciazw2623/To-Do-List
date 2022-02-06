<template>
    <div>
        <input 
        placeholder = 'Task Name' 
        v-model = 'value'
        @keydown.enter = 'enter'
        />
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'navHeader',
  setup(props, ctx){
    let value = ref('')
    let enter = () => {
      ctx.emit("add", value.value)
      value.value = ""
    }
    return{
      value,
      enter
    }
  },
})
</script>

<style scoped lang = 'scss'>
  input{
    margin-bottom: 20px;
    font-size: 15px;
  }
</style>