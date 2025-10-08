<template>
  <div>
    <MarkDown :filepath= "overview"/>
    <Gallery/>
    <MarkDown id="wet" :filepath= "wet"/>
    <MarkDown id="dry" :filepath= "dry"/>
    <div>
      <a href="https://forms.gle/d9vutEpNdFtSLneZA" class="hover:underline hover:text-teal-500">
        <p class="text-teal-500 text-2xl md:text-4xl font-bold text-center mx-auto my-16;">
          Dry・情報系人材大募集！！<br>
          バイオ×プログラミング<br>
        </p>
      </a>
    </div>
    <MarkDown id="human-practice" :filepath= "human_practice"/>
    <MarkDown id="design" :filepath= "design"/>
    <div>
      <a href="https://forms.gle/d9vutEpNdFtSLneZA" class="hover:underline hover:text-teal-500">
        <p class="text-teal-500 text-2xl md:text-4xl font-bold text-center mx-auto my-16;">
          フロントエンド班、デザイン班メンバー大募集中！<br>
          未経験でも大歓迎！<br>
          一緒にwikiをつくりあげてみませんか！！ <br>
        </p>
      </a>
    </div>    
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
      overview: 'events.md',
      wet: 'wet.md',
      dry: 'dry.md',
      human_practice: 'human-practice.md',
      design: 'design.md',
    }
  },
  head() {
    return {
        title: '活動内容',
        meta: [
          { hid: 'og:title', property: 'og:title', content: '活動内容' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/events' },
        ],
      }
    }      
}
</script>