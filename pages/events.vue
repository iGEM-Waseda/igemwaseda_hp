<template>
  <div>
    <MarkDown :filepath= "filepath"/>
    <Timeline class="w-4/5 md:w-2/5 mx-auto" id="Wasedaigem" sourceType="profile" :options="{ tweetLimit: '2' }"/>
  </div>
</template> 

<script>
import MarkDown from '../components/MarkDown.vue'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
export default{
  components: { MarkDown, Timeline },
  data(){
    return {
      filepath: 'events.md'
      }
    },
    head: {
      return: {
        meta: [
          { hid: 'og:title', property: 'og:title', content: '活動内容' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/events' },
        ],
      }
    }    
  }
</script>