<template>
  <div class="border border-slate-300 hover:border-slate-400 rounded-lg border-2 p-2">
    <NuxtLink :to="LinkTo" class="inline-flex items-center text-black-800 sm:text-xl text-lg font-bold gap-2.5" aria-label="logo">
      <img :src="require(`@/assets/image/${imgURL}`)" alt="" class="sm:h-10 sm:w-10 w-6 h-6">
      {{ Text }}
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    imgURL: {
      default: "iGEM_Waseda_logo_trim.png",
    },
    Text: {
      default: "iGEM Waseda",
    },
    LinkTo: {
      default: "/",
    }
  }
}
</script>