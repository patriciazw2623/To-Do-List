<template>
    <div class = "container">
        Completed {{isComplete}} Task(s) / Total {{list.length}} Task(s)
    </div>
    <div v-if="isComplete>0" class = "btn"> 
      <button @click="clear">Clear All Completed Tasks </button>
    </div>
</template>

<script>
import {defineComponent, ref, computed} from 'vue'
export default defineComponent({
  name: 'navFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx){
    let isComplete = computed(() => {
      let arr = props.list.filter(item => {
        return item.complete
      })
      return arr.length
    })
    let clear = () => {
      let arr = props.list.filter(item => {
        return item.complete === false
      })
      ctx.emit('clear', arr)
    }
    return{
      isComplete, clear
    }
  }
})
</script>

<style scoped lang = 'scss'>
  .container {
    margin-top: 10px;
    font-size: 15px;
    align-items: center;
    margin-bottom: 15px;
    .btn {
      font-size: 15px;
      height: 25px;
      margin-left: 10px;
    }
  }
</style>