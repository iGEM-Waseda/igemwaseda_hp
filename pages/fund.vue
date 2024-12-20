<template>
  <div>
    <MarkDown :filepath= "filepath"/>
    
    <div class="my-20 md:h-100 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
      <div class="w-full sm:w-1/2 lg:w-2/5 h-96 sm:h-auto order-first sm:order-none bg-gray-300">
        <img src="@/assets/image/fund.jpeg" loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
      </div>



      <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
        <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold mb-4">寄付 - Contribution</h2>
        <p class="text-xl text-gray-600 mb-8">
          私たちiGEM Wasedaは、環境問題や食糧問題を解決するために、合成生物学を活用した実験や調査に取り組んでいます。私たちは、世界的なコンテストiGEMに参加し、新たな発見や解決策を提供することを目指しています。<br><br>
          しかし、iGEMへの出場には多大な費用が必要です。登録費(<b>$5500 USD</b>)や参加費(<b>$3,000 USD</b>)だけでなく、実験に必要な試薬や設備費用もかかります。私たちは、これらの費用を賄うことができず、皆様からのご支援が不可欠となっています。<br><br>
          私たちの活動に共感いただける方々からの寄付を、心よりお待ちしております。私たちの取り組みが、より良い未来を築くための貴重な貢献となることを願っています。<br>
        </p>
        <div class="mt-auto mx-auto">
          <a href="https://forms.gle/Wm4VeKUBuEL9zcQz7" target="_blank"  
          class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 
          text-white text-sm sm:text-lg md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">iGEMを支援する</a>
        </div>
      </div>
    </div>  

    <div class="my-20 md:h-100 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
      <div class="w-full sm:w-1/2 lg:w-2/5 h-96 sm:h-auto order-first sm:order-none bg-gray-300">
        <img src="@/assets/image/happi-1.jpg" loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
      </div>
      <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
        <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold mb-4">協賛 - Sponsorship</h2>
        <p class="text-xl text-gray-600 mb-8">
          私たちiGEM Wasedaは、この大会に出場するために協賛企業様を募集しています。
          企業様からのご支援は、研究費や機材費、大会参加費など、チーム活動に必要な資金として活用させていただきます。
          協賛いただいた企業様は、ホームページやチームのプロモーション資料、プロジェクト報告書へ掲載させていただきます。<br><br>
          私たちのチームは、合成生物学を通じて社会に貢献するプロジェクトを展開しており、企業様とともに持続可能な未来を創造することを目指しています。
          iGEM大会への出場は、私たちの研究プロジェクトをより多くの人に知っていただく絶好の機会です。<br><br>
          協賛企業様とともに、私たちのチームがiGEMで最高の成果を出せるよう、力を合わせて取り組んでまいります。皆様のご支援とご協力を心よりお待ちしております。
          協賛に関するお問い合わせやご質問がございましたら、お気軽にお問い合わせください。
        </p>
        <div class="mt-auto mx-auto">
          <a href="https://forms.gle/d9vutEpNdFtSLneZA" target="_blank" 
          class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 
          text-sm sm:text-2xl  text-sm sm:text-lg md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2
          outline  outline-2 outline-gray-400">お問い合わせ</a> 
      </div>
      </div>
    </div>

    <div class="my-20 md:h-100 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
      <div class="w-full sm:w-1/2 lg:w-2/5 h-96 sm:h-auto order-first sm:order-none bg-gray-300 flex items-center justify-center">
        <img src="@/assets/image/crowd-funding.jpeg" loading="lazy" alt="Photo by Andras Vas" class="w-full object-contain object-center">
      </div>
      <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
        <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold mb-4">御礼 - Special Thanks</h2>
        <p class="text-xl text-gray-600 mb-8">
          <b>2024.5.31~2024.6.30</b>に実際された<a href="https://camp-fire.jp/projects/739001/view/backers" class=" hover:text-teal-500 font-bold">クラウドファンディング</a>では多くの方々から温かいご支援をいただきました。
          以下、特に名前の記載をご希望いただいた方々を紹介させていただきます。<br>
        </p>
        <div class="sponsors-list">
          <div v-for="(sponsor, index) in crowdFoundingObj" :key="index" class="sponsor-item">
            <div class="sponsor-name"><p>{{ sponsor.name }}</p></div>
          </div>
        </div>
          <p class="text-xl text-gray-600 mb-8">
            その他、多くのご支援者の皆様にも、心より感謝申し上げます。皆様の応援が、私たちの活動を支える大きな原動力となっております。
          </p>
      </div>    
    </div>    
  </div>
</template> 
<style scoped>
.sponsor-highlight .sponsor-name {
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: #0078d7;
}


/* 個々のスポンサー名のスタイル */
.sponsor-name {
  font-family: 'Arial', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #14B8A6; 
  text-decoration: none;
  padding: 5px 10px;
  margin-top: 0 !important;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.sponsor-name:hover {
  transform: scale(1.1); /* 少し拡大 */
  border-color: #14B8A6; /* 枠線に色を追加 */
  background-color: #e6f7ff; /* 薄い青色の背景 */
}

/* スポンサー企業リストのスタイル */
.sponsors-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; /* 各企業名間の隙間 */
}
</style>

<script>
import MarkDown from '../components/MarkDown.vue'
const crowdFoundingArr = ["Rei Abe","Keigo Ide","阿南美穂(OG)","鈴木征光","千葉孝雄","ScienceBar_INCUBATOR","株式会社QueeenB / 研究コミュニティミツバチ　根本一希","株式会社トレスバイオ研究所","琴線計画","安田学園中学校高等学校生物部顧問 小島直樹"]
const crowdFoundingObj = crowdFoundingArr.sort().map((name) => { return { name: name }});

export default{
  components: { MarkDown },
  data(){
    return {
      filepath: 'fund.md',
      crowdFoundingObj: crowdFoundingObj
    }
  },
  head() {
    return {
        title: '寄付・協賛',
        meta: [
          { hid: 'og:title', property: 'og:title', content: '寄付・協賛' },
          { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app/fund' },
        ],
      }
    }      
}
</script>