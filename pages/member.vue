<template>
<!-- team - start -->
<div>
  <MarkDown :filepath= "filepath"/>
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto sm:my-8 my-16">
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">Junior(B3)</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
        <MemberCard :imagePath="require('@/assets/image/member/ryojun-hayashizaki.jpg')" :name="`林﨑 諒巡`" :team="`幹事長 / Wet / HP`" :major="`先進理工学部 生命医科学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/yuki-hongo.png')" :name="`本郷 祐規`" :team="`副幹事長 / Wet / Video`" :major="`先進理工学部 生命医科学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/kohei-toda.png')" :name="`戸田 航平`" :team="`会計 / Wet / Video`" :major="`先進理工学部 生命医科学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/sotaro-iijima.png')" :name="`飯島 壮大郎`" :team="`Wet / HP-Entrepreneur`" :major="`先進理工学部 電気・情報生命工学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/ayaka-sasaki.jpg')" :name="`佐々木 彩佳`" :team="`Dry`" :major="`先進理工学部 電気・情報生命工学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/mayu-tsuchiya.png')" :name="`土屋 茉由`" :team="`Illustrator / Video`" :major="`先進理工学部 電気・情報生命工学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/tomoya-ogawa.png')" :name="`小川 智也`" :team="`Wiki`" :major="`先進理工学部 電気・情報生命工学科 3年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/shota-yamamoto.png')" :name="`山本 翔太`" :team="`Dry / Wiki`" :major="`基幹理工学部 情報理工学科 3年`"/>
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">Sophomore(B2)</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
        <MemberCard :imagePath="require('@/assets/image/member/ryoka-kuwabara.png')" :name="`桑原 涼歌`" :team="`Wet / Dry`" :major="`先進理工学部 電気・情報生命工学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/ryoya-otsuki.png')" :name="`大附 綾也`" :team="`HP-Education`" :major="`先進理工学部 電気・情報生命工学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/satoki-fukazawa.png')" :name="`深沢 仁貴`" :team="`Wet / HP-Collaboration`" :major="`先進理工学部 生命医科学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/haruka-nakamura.png')" :name="`中村 春香`" :team="`Wet / HP-Education`" :major="`先進理工学部 生命医科学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/hana-watanabe.jpg')" :name="`渡辺 華`" :team="`Wet / HP-Collaboration`" :major="`先進理工学部 生命医科学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/ryutaro-aonuma.jpg')" :name="`青沼 龍太朗`" :team="`Wet / HP-Education`" :major="`先進理工学部 生命医科学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/joseph-yokobori.jpg')" :name="`横堀 襄`" :team="`Dry / HP-Collaboration`" :major="`先進理工学部 生命医科学科 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/ema-keino.png')" :name="`慶野 恵茉`" :team="`Wet / HP-Education`" :major="`教育学部 理学科 生物学専修 2年`"/>
        <MemberCard :imagePath="require('@/assets/image/member/kaede-yoshida.png')" :name="`吉田 楓`" :team="`HP-Education`" :major="`先進理工学部 Major in Bioscience 2年`"/>
        <MemberCard :name="`宮本 遼人`" :team="`Dry / Wiki`" :major="`基幹理工学部 情報理工学科 2年`"/>
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">Instructors</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
        <MemberCard :imagePath="require('@/assets/image/member/daisuke-kiga.png')" :name="`木賀 大介`" :team="`Principal Investigator`" :major="`理工学術院先進理工学部 電気・情報生命工学科 教授`"/>
        <MemberCard :imagePath="require('@/assets/image/member/toru-asahi.png')" :name="`朝日 透`" :team="`Principal Investigator`" :major="`理工学術院先進理工学部 生命医科学科 教授`"/>
      </div>
    </div>
  </div>
</template>
<script>
import MarkDown from '../components/MarkDown.vue'
import MemberCard from '../components/Molecules/MemberCard.vue'
export default{
components: { MarkDown, MemberCard },
data(){
  return {
      filepath: 'member.md',
    }
  },
head() {
    return {
      title: 'メンバー',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'メンバー' },
        { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/member' },
      ],
    }
  }
}
</script>
