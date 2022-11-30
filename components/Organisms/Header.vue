<template>
  <!-- hero - start -->
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <header class="flex justify-between items-center py-4 md:py-8 mb-4">
      <!-- logo - start -->
      <div class="border border-slate-300 hover:border-slate-400 rounded-lg border-2 p-2">
        <NuxtLink to="/" class="inline-flex items-center text-black-800 text-3xl md:text-3xl font-bold gap-2.5" aria-label="logo">
          <img src="~/assets/image/iGEM_Waseda_logo_trim.png" alt="" width="70" height="70">
          iGEM Waseda
        </NuxtLink>
      </div>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class="hidden lg:flex gap-12">
        <NuxtLink to="#igem" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">iGEMとは</NuxtLink>
        <NuxtLink to="#synbio" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">合成生物学とは</NuxtLink>
        <NuxtLink to="#team" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">チーム</NuxtLink>
        <NuxtLink to="#project" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">プロジェクト</NuxtLink>
        <NuxtLink to="#fund" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">基金・寄付</NuxtLink>
      </nav>
      <!-- nav - end -->


      <!-- buttons - start -->
      <a href="#" class="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 text-2xl md:text-2xl font-bold text-center rounded-lg outline-none transition duration-100 px-4 py-2">お問い合わせ</a>
      <!-- buttons - end -->
    </header>

    <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
      <!-- image - start -->
      <img src="@/assets/image/topimage.png" loading="lazy" alt="Photo of 2022 iGEM Team Waseda Tokyo" class="w-full h-full object-cover object-center absolute inset-1" />
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="bg-gray-500 mix-blend-multiply absolute inset-0"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div class="sm:max-w-xl flex flex-col items-center relative p-4">
        <p class="text-teal-200 text-lg sm:text-2xl text-center  mb-4 md:mb-8">iGEM 早稲田大学代表チーム</p>
        <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-8 md:mb-12">合成生物学で<br/>世界を変えよう!</h1>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <a href="#" class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">iGEMを支援する</a>

          <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 text-sm md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">お問い合わせ</a>
        </div>
      </div>
      <!-- text end -->
    </section>
  </div>
</div>
<!-- hero - end -->
</template>