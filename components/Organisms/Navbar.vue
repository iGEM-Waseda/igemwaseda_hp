<template>
  <nav class="bg-white sticky top-0 z-50 border-b" :class="{ 'scrolled': !view.atTopOfPage }" >
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="flex justify-between items-center py-2 md:py-4">

      <!-- Header logo -->
      <Logo/>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg 
            class="h-10 w-10 sm:h-14 sm:w-14 fill-current text-black"
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2" 
            viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <!-- <li><a href="#" class="active border-b-2 border-blue-500 pb-1">Home</a></li> -->
          <li v-for ="(name, index) in $store.state.menu.name" :key="name">
            <NuxtLink :to="$store.state.menu.to[index]" class="text-gray-600 hover:text-teal-500 active:text-teal-700 text-2xl font-bold transition duration-100">
              {{ name }}
            </NuxtLink>
          </li>

          <!-- <li><a href="#" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold">Sign Up</a></li> -->
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg 
              class="w-6 h-6"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <Tailwind />
        </span>

        <ul class="divide-y">
          <li v-for ="menu in $store.state.menu.name" :key="menu"><a href="#" @click="isOpen = false" class="my-4 inline-block">
              {{ menu }}
          </a></li>
        </ul>
        <div class="my-4"> 
          <a href="#" @click="isOpen = false" class="my-2 w-full text-center font-semibold cta inline-block px-3 py-2 rounded text-sm md:text-2xl transition duration-100
            bg-teal-500 
            hover:bg-teal-600 
            active:bg-teal-700 
            text-white">
            iGEMを支援する
          </a>
          <a href="#" @click="isOpen = false" class="my-2 w-full text-center font-semibold cta inline-block px-3 py-2 rounded text-sm md:text-2xl transition duration-100
            bg-gray-200 
            hover:bg-gray-300 
            active:text-gray-700
            text-gray-500">
            お問い合わせ
          </a>
        </div>

        <div class="follow">
          <p class="italic font-sans text-sm">follow us:</p>
          <Social/>
        </div>

      </aside>

    </div>
    </div>
  </nav>
</template>
<style scoped>
nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}
</style>
<script>
import Logo from '../Atoms/Logo.vue';
import Social from '../Molecules/Social.vue';

export default {
    data() {
        return {
          
            isOpen: false,
            view: {
              atTopOfPage: true
            }
        };
    },
    methods: {
        drawer() {
            this.isOpen = !this.isOpen;
        },
        handleScroll(){
            if(window.pageYOffset>0){
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
            }   
        }     
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen)
                        document.body.style.setProperty("overflow", "hidden");
                    else
                        document.body.style.removeProperty("overflow");
                }
            }
        }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.isOpen)
                this.isOpen = false;
        });
        
    },
    components: { Logo, Social }
};
</script>