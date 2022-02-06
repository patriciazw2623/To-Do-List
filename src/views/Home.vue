<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list='list' @del='del'></nav-main>
    <nav-footer :list='list' @clear='clear'></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {useStore} from "vuex"
import {useRouter} from "vue-router"

import {defineComponent, computed, ref} from 'vue'
export default defineComponent({
  name: 'Home', 
  props:{

  },
  components:{
    NavHeader, NavMain, NavFooter
  },
  setup(){
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    let add = (val) => {
      value.value = val
      let flag = true
      list.value.map(item => {
        if (item.title == value.value){
          flag = false
          alert('Task existed!')
        }
      })
      if (flag){
        store.commit("addToDo",{
          title: value.value,
          complete: false
      })
      }
      
    }
    let del = (val) => {
      store.commit("delToDo", val)
    }
    let clear = (val) => {
      store.commit("clear", val)
    }
    return {
      add, value, list, del, clear
    }
  }
})
</script>

<style lang = 'scss'>
</style>