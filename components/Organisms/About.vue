<template>
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto my-8 my-16">
    <div class="flex mb-4">
      <h2 class="text-gray-800 text-2xl md:text-5xl font-bold text-start">{{ Title }}</h2>
      <NuxtLink class="flex items-center text-xs md:text-2xl mt-3 hover:border-b-4 border-teal-500 text-teal-500 font-bold ml-2 md:ml-5" :to="LinkTo">
        <span class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
        <span class="relative">詳しくはこちら</span>
        <svg class="relative mt-px overflow-visible text-teal-500 h-1 w-1 md:h-3 md:w-3"  viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
      </NuxtLink>
    </div>
    <p class="text-gray-500 md:text-2xl mx-auto mt-3 md:mt-6">
      <slot>{{ Text }}</slot>
      <!-- iGEM(<b>I</b>nternational <b>G</b>enetically <b>E</b>ngineered <b>M</b>achine)とは国際的な合成生物学の大会です。iGEMではBioBricksという生物の遺伝子を規格化したパーツ配布しており、それらを組み合わせ社会に役立つ生物作り出すことを目標としています。過去のプロジェクト例として、環境中の有害物質を検出する大腸菌や養殖魚の病気を検知する大腸菌などがあり、いずれも社会的、ビジネス的課題を学生たちの力で解決しています。 -->
    </p>

  </div>
</template>
<script>
export default {
  props: {
    LinkTo: {},
    Text: {},
    Title: {}
  }
}
</script>
