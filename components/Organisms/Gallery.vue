<template>
<!-- gallery - start -->
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">チームについて</h2>
    <!-- text - start -->
      <p class="max-w-screen-md text-gray-500 md:text-lg mx-auto mb-4 md:mb-6">
        iGEMの活動は生物系だけではありません。活動は主にWet, Dry, Human Practiceに3つにわけることができます。Wet
        では自分でプロジェクト立案、実験計画から実際の生物実験まで担当します。Dryでは実験のシミュレーション、デバイスやアプリの作成をします。Human Practiceは合成生物学の教育普及、海外チームとのコラボレーション、専門家へのインタビュー、事業化計画など様々な分野があります。また、それ以外でも成果発表用のウェブサイトを作成するwiki班, プロモーションビデオを作成するvideo班やillustrator班などがあります。videoやillustratorなどは年間を通して人員を募集しているので、興味ある方は次の<u><a href="/" class="hover:bg-teal-500">リンク</a></u>にご連絡ください。
        <!-- <MoreBtn/> -->
      </p>
    <!-- text - end -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
      <!-- image - start -->
      <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/wet.png" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span class="inline-block text-white text-sm md:text-8xl relative ml-4 md:ml-5 mb-3">Wet</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/dry.png" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span class="inline-block text-white text-sm md:text-8xl relative ml-4 md:ml-5 mb-3">Dry</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/hp.png" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span class="inline-block text-white text-sm md:text-6xl relative ml-4 md:ml-5 mb-3">Human Practice</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/other.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span class="inline-block text-white text-sm md:text-6xl relative ml-4 md:ml-5 mb-3">Wiki•Video<br>•Illustrator</span>
      </a>
      <!-- image - end -->
    </div>
  </div>
<!-- gallery - end -->
</template>
<script>
import MoreBtn from '../Atoms/MoreBtn.vue';
export default {
  components: {
    MoreBtn,
  }
}
</script>