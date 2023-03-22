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
      filepath: 'synbio.md'
    }
  },
  head() {
    return {
        title: '合成生物学とは',
        meta: [
          { hid: 'og:title', property: 'og:title', content: '合成生物学とは' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/synbio' },
        ],
      }
    }     
}
</script>