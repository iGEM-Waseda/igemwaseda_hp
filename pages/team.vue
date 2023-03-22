<template>
  <div>
    <MarkDown :filepath= "overview"/>
    <Gallery/>
    <MarkDown id="wet" :filepath= "wet"/>
    <MarkDown id="dry" :filepath= "dry"/>
    <MarkDown id="human-practice" :filepath= "human_practice"/>
    <MarkDown id="design" :filepath= "design"/>
  </div>
</template>
<style scoped>
[id] { scroll-margin-top: 120px; } 
/* ヘッダー分スクロールする */
</style>
<script>
import Gallery from '../components/Organisms/Gallery.vue';
import MarkDown from '../components/MarkDown.vue'
export default {
    components: { Gallery, MarkDown },
    data(){
    return {
      overview: 'team.md',
      wet: 'wet.md',
      dry: 'dry.md',
      human_practice: 'human-practice.md',
      design: 'design.md',
    }
  },
  head: {
      return: {
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'チーム' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/team' },
        ],
      }
    }      
}
</script>