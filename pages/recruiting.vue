<template>
    <div>
      <MarkDown :filepath= "filepath"/>

      <div class="w-full sm:w-1/2 lg:w-[1024px] flex flex-col p-4 sm:p-8 !pb-0 m-auto">
        <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold mb-4">2025冬 新メンバー募集中</h2>
        <div class="flex justify-center items-center flex-wrap m-2">
            <img class="w-1/3 m-2" src="/images/flyer-2025-winter-1.png" alt="iGEM-Waseda 2025冬新歓チラシ表">
            <img class="w-1/3 m-2" src="/images/flyer-2025-winter-2.png" alt="iGEM-Waseda 2025冬新歓チラシ裏">
        </div>
        <p class="text-gray-500 md:text-xl mx-auto my-2 md:my-4 mb-0">
            入会を検討している方向けに新歓説明会を行います。入会を希望している方はこの説明会に必ず参加してください。参加するには、上記チラシのQRコードまたは
            <a class="underline text-teal-500 hover:text-teal-600"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeuEMtIyLyucXHfZyVcQFMv16rU8bLxSBLZzCqj4Z9HTK7C7Q/viewform?usp=sharing&ouid=105628267663667860800"
            target="_blank"
            rel="noopener">このリンク</a>
            から参加フォームを記入してください。
        </p>
      </div>

      <div class="w-full sm:w-1/2 lg:w-[1024px] flex flex-col p-4 sm:p-8 !pb-0 !pt-0 m-auto">
        <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start mt-16 pb-4">Q＆A</h2>
        <div class="flex flex-col gap-y-2 flex-auto">
            <ul class="md:text-xl">
                <li v-for="(item, index) in $store.state.q_and_a.items" :key="index" class="mb-4">
                    <div class="text-gray-800 border-l-[12px] border-gray-800 pl-[8px]">
                        <b>Q. {{ item.question }}</b>
                    </div>
                    <div class="text-gray-500 pl-[20px] pt-1">
                        A. {{ item.answer }}
                    </div>
                </li>
            </ul>
        </div>        
      </div>
    </div>
  </template> 
  
  <script>
  import MarkDown from '../components/MarkDown.vue'
  export default{
    components: { MarkDown },
    data(){
      return {
        filepath: 'recruiting.md'
          }
    },
    head() {
      return {
          title: '入会を希望される方へ',
          meta: [
            { hid: 'og:title', property: 'og:title', content: '入会を希望される方へ' },
            { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/recruiting' },
          ],
        }
      }      
  }
  </script>
