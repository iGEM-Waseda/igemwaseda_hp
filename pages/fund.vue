<template>
  <div>
    <MarkDown :filepath= "filepath"/>
  </div>
</template> 

<script>
import MarkDown from '../components/MarkDown.vue'
export default{
  components: { MarkDown },
  data(){
    return {
      filepath: 'fund.md'
    }
  }
}
</script>