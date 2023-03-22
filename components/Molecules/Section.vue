<template>
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto sm:my-8 my-16">
    <div class="flex mb-4">
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start">{{ $store.state.menu[menu].title }}</h2>
      <NuxtLink class="flex items-center text-xs md:text-xl mt-3 hover:mt-2 hover:border-b-4 border-teal-500 text-teal-500 font-bold ml-2 md:ml-5" :to="$store.state.menu[menu].to">
        <span class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
        <span class="relative">詳しくはこちら</span>
        <svg class="relative mt-px overflow-visible text-teal-500 h-1 w-1 md:h-3 md:w-3"  viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
      </NuxtLink>
    </div>
    <p class="text-gray-500 md:text-2xl mx-auto mt-3 md:mt-6">
      <slot>{{ Text }}</slot>
    </p>

  </div>
</template>
<script>
export default {
  props: {
    menu: {},
  }
}
</script>
