<template>
<div class="social flex space-x-5 mt-4 ">
  <TwitterBtn/>
  <YoutubeBtn/>
  <InstagramBtn/>
</div>
</template>
<script>
import TwitterBtn from '../Atoms/TwitterBtn.vue'
import InstagramBtn from '../Atoms/InstagramBtn.vue'
import YoutubeBtn from '../Atoms/YoutubeBtn.vue'
export default {
  components: {
    TwitterBtn,
    YoutubeBtn,
    InstagramBtn
  }
}
</script>
