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
      filepath: 'igem.md'
    }
  },
  head() {
    return {
        title: 'iGEMとは',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'iGEMとは' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/igem' },
        ],
      }
    }      
}
</script>