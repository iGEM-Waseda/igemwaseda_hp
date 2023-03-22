<template>
<!-- gallery - start -->
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - end -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
      <!-- image - start -->
      <a href="#wet" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/wet.png" loading="lazy" alt="Photo of wet" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
        <span class="inline-block text-white text-4xl md:text-5xl relative ml-4 md:ml-5 mb-3">Wet</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#dry" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/dry.png" loading="lazy" alt="Photo of dry" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
        <span class="inline-block text-white text-4xl md:text-5xl relative ml-4 md:ml-5 mb-3">Dry</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#human-practice" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/hp.png" loading="lazy" alt="Photo of human-practice" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
        <span class="inline-block text-white text-4xl md:text-5xl relative ml-4 md:ml-5 mb-3">Human Practice</span>
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a href="#design" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="@/assets/image/other.png" loading="lazy" alt="Photo of design" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
        <span class="inline-block text-white text-4xl md:text-5xl relative ml-4 md:ml-5 mb-3">Wiki•Video<br>•Illustrator</span>
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