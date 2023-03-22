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
  },
  head: {
      return: {
        meta: [
          { hid: 'og:title', property: 'og:title', content: '寄付・協賛' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/fund' },
        ],
      }
    }      
}
</script>