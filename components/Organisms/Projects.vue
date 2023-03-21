<template>
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">プロジェクトについて</h2>
    <!-- text - start -->
      <p class="max-w-screen-md text-gray-500 md:text-lg mx-auto mb-4 md:mb-6">
        早稲田チームは2020年と2022年の2回のiGEM出場を果たしています。2020年の<b><NuxtLink to="https://2020.igem.org/Team:Waseda">Zombie vs Sumrai</NuxtLink></b>では、Gold MedalとBest Information Processing(部門1位)、Best Education Nomination(部門3位以内)という最高成績を得ることができました。2022年の<b><NuxtLink to="https://2022.igem.wiki/waseda-tokyo/">Cell Freedom ~ Expanding the Possibility of cell-free system</NuxtLink></b>では、Gold MedalとBest Foundational Advancement Nominationという成績を得ることができました。
        <!-- <MoreBtn/> -->
      </p>
    <!-- text - end -->

    
    <div class="grid grid-cols-2 md:grid-cols-4 bg-teal-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8">

    <!-- stat - start -->
    <div class="flex flex-col items-center">
      <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">Since</div>
      <div class="text-teal-200 text-sm sm:text-base">2019</div>
    </div>
    <!-- stat - end -->
    
    <!-- stat - start -->
    <div class="flex flex-col items-center">
      <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">Medals</div>
      <div class="text-teal-200 text-sm sm:text-base">
        iGEM2020<br>
        iGEM2022<br>
      </div>
    </div>
    <!-- stat - end -->

    <!-- stat - start -->
    <div class="flex flex-col items-center">
      <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold"> Nominations</div>
        <div class="text-teal-200 text-sm sm:text-base">
        Best Foundational Advance(2022)<br>
        Best Education(2020)
      </div>
    </div>


    <!-- stat - start -->
    <div class="flex flex-col items-center">
      <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">Track Award</div>
      <div class="text-teal-200 text-sm sm:text-base">
        Best Information Processing(2020)
      </div>
    </div>
    <!-- stat - end -->
  </div>
</div>
</template>
<script>
import MoreBtn from '../Atoms/MoreBtn.vue';
export default {
  components: {
    MoreBtn,
  }
}
</script>