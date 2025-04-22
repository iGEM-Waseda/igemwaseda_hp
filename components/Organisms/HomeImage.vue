<template>
    <section class="h-screen flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48 mb-20 -mt-28">
      <img :src="require(`@/assets/image/homeimage.png`)" loading="lazy" alt="Photo of 2022 iGEM Team Waseda Tokyo" class="max-md:hidden  w-full h-full object-cover object-center absolute inset-1" />
      <img :src="require(`@/assets/image/home-right2024.jpg`)" loading="lazy" alt="Photo of 2022 iGEM Team Waseda Tokyo" class="md:hidden w-full h-full object-cover object-center absolute inset-1"/>

      <div class="bg-gray-500 mix-blend-multiply absolute inset-0"></div>

      <div class="flex flex-col items-center relative p-4 mt-28">
        <h1 class="text-teal-500 text-2xl sm:text-3xl text-center font-semibold  mb-4 md:mb-8">iGEM 早稲田大学代表チーム</h1>
        <h2 class="text-white text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-8 md:mb-12">合成生物学で<br/>世界を変えよう!</h2>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <a href="https://forms.gle/Wm4VeKUBuEL9zcQz7" target="_blank" class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">iGEMを支援する</a>

          <a href="https://forms.gle/d9vutEpNdFtSLneZA" target="_blank" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 text-sm md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">お問い合わせ</a>
        </div>
      </div>
    </section>
</template>
<script>
</script>