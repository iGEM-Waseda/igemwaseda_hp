<template>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <header class="flex justify-between items-center py-4 md:py-8 mb-4">
      <IconBtn/>
      
      <nav class="hidden lg:flex gap-12"  v-bind:class="{'is-active' : isOpen }">
        <HeaderBtn :LinkTo="`#igem`" :Text="`iGEMとは`"/>
        <HeaderBtn :LinkTo="`#synbio`" :Text="`合成生物学とは`"/>
        <HeaderBtn :LinkTo="`#team`" :Text="`チーム`"/>
        <HeaderBtn :LinkTo="`#project`" :Text="`プロジェクト`"/>
        <HeaderBtn :LinkTo="`#igem`" :Text="`基金・寄付`"/>
      </nav>
      <button type="button" class="menu-btn" v-on:click="isOpen=!isOpen">
      <i class="fa fa-bars" aria-hidden="true">Bittton</i>
      </button>
      <Btn :LinkTo="`https://forms.gle/d9vutEpNdFtSLneZA`" :Text="`お問い合わせ`"/>
    </header>


  </div>
</div>
<!-- hero - end -->
</template>

<script>
import Btn from '../Atoms/Btn.vue'
import HeaderBtn from '../Atoms/HeaderBtn.vue'
import Logo from '../Atoms/Logo.vue'
export default {
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    HeaderBtn,
    Logo,
    Btn,
  }
}
</script>