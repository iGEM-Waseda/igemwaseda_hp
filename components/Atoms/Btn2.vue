<template>
  <a :href="LinkTo" target="_blank" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 text-sm md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
    {{ Text }}
    
  </a>
</template>
<script>
export default {
  props: {
    LinkTo: {},
    Text: {}
  }
}
</script>