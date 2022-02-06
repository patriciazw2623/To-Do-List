<template>
  <div class="about" id="nav">
    <h1>This is an about page</h1>
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