<template>
  <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key = "index">
          <div class = "item">
            <input type = "checkbox" v-model = "item.complete">
            {{item.title}}
            <button class = "del" @click="del(item, index)">Delete Task</button>
          </div>
      </div>
  </div>
  <div v-else>
      No task at the moment.
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'navMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['del'],
  setup(props, ctx){
    let del = (item, index) => {
      ctx.emit('del', index)
    }
    return{
      del
    }
  }
})
</script>

<style scoped lang = 'scss'>
  .item {
    font-size: 20px;
    line-height: 30px;
    position: relative;
    text-align: left;
    left: 30%;
    width: 40%;
    height: 35px;
    cursor: pointer;
    button {
      font-size: 15px;
      height: 25px;
      position: absolute;
      right: 20px;
      top: 5px;
      display: none;
      z-index: 99;
    }
    &:hover{
      background: #ddd;
      button{
        display: block;
      }
    }
  }
</style>