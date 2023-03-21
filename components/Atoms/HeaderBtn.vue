<template>
    <NuxtLink :to="LinkTo" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">
      {{ Text }}
    </NuxtLink>
</template>
<script>
export default {
  props: {
    LinkTo: {},
    Text: {}
  } 
}
</script>