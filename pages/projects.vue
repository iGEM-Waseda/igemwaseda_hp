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
      filepath: 'projects.md'
    }
  },
  head() {
    return {
        title: 'プロジェクト',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'プロジェクト' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/projects' },
        ],
      }
    }      
}
</script>