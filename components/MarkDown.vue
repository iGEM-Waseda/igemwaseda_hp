<template>
  <div class="markdown" v-html="text"></div>
</template> 

<script lang="ts">
import {marked} from 'marked';

export default {
  props: {"filepath":String},
  setup(props){
    console.log(props.filepath)
    const mdText = require("@/markdowns/"+props.filepath);
    const text = marked(mdText.default);
    return {
      text
    }
  }
};
</script>