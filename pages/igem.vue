<template>
  <div>
    <MarkDown :filepath= "filepath"/>
  </div>
</template> 

<script>
  import MarkDown from '../components/Markdown.vue'
  export default{
    components: { MarkDown },
    data(){
      return {
        filepath: 'igem.md'
      }
    }
  }
</script>