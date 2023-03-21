
import Section from '../components/Molecules/Section.vue';

<template>
  <div>
    <Section 
      :Title="`iGEMについて`"
      :LinkTo="`/igem`">
      iGEM(<b>I</b>nternational <b>G</b>enetically <b>E</b>ngineered <b>M</b>achine)とは国際的な合成生物学の大会です。iGEMではBioBricksという生物の遺伝子を規格化したパーツ配布しており、それらを組み合わせ社会に役立つ生物作り出すことを目標としています。過去のプロジェクト例として、環境中の有害物質を検出する大腸菌や養殖魚の病気を検知する大腸菌などがあり、いずれも社会的、ビジネス的課題を学生たちの力で解決しています。
    </Section>
    <Section 
      :Title="`合成生物学について`"
      :LinkTo="`/synbio`">
      皆さんは合成生物学という言葉を聞き慣れないかもしれませんが、実は今最先端で研究されている分野です。組織・細胞・遺伝子などの生物の構成要素を部品とみなし、それらを組み合わせて生命機能を人工的に設計したり、人工の生物システムを構築する学問分野だと言われています。(日経バイオテクONLINEより転載)。
    </Section>
    <Section 
      :Title="`チームについて`"
      :LinkTo="`/team`">
      iGEMの活動は生物系だけではありません。活動は主にWet, Dry, Human Practiceに3つにわけることができます。Wetでは自分でプロジェクト立案、実験計画から実際の生物実験まで担当します。Dryでは実験のシミュレーション、デバイスやアプリの作成をします。Human Practiceは合成生物学の教育普及、海外チームとのコラボレーション、専門家へのインタビュー、事業化計画など様々な分野があります。また、それ以外でも成果発表用のウェブサイトを作成するwiki班, プロモーションビデオを作成するvideo班やillustrator班などがあります。videoやillustratorなどは年間を通して人員を募集しているので、興味ある方は次の<u><a href="/" class="hover:bg-teal-500">リンク</a></u>にご連絡ください。
    </Section>
    <Section 
      :Title="`メンバーについて`"
      :LinkTo="`/member`">
      iGEMの活動は生物系だけではありません。活動は主にWet, Dry, Human Practiceに3つにわけることができます。Wetでは自分でプロジェクト立案、実験計画から実際の生物実験まで担当します。Dryでは実験のシミュレーション、デバイスやアプリの作成をします。Human Practiceは合成生物学の教育普及、海外チームとのコラボレーション、専門家へのインタビュー、事業化計画など様々な分野があります。また、それ以外でも成果発表用のウェブサイトを作成するwiki班, プロモーションビデオを作成するvideo班やillustrator班などがあります。videoやillustratorなどは年間を通して人員を募集しているので、興味ある方は次の<u><a href="/" class="hover:bg-teal-500">リンク</a></u>にご連絡ください。
    </Section>    
    <Section 
      :Title="`プロジェクトについて`"
      :LinkTo="`/projects`">
      早稲田チームは2020年と2022年の2回のiGEM出場を果たしています。2020年の<b><NuxtLink to="https://2020.igem.org/Team:Waseda">Zombie vs Sumrai</NuxtLink></b>では、Gold MedalとBest Information Processing(部門1位)、Best Education Nomination(部門3位以内)という最高成績を得ることができました。2022年の<b><NuxtLink to="https://2022.igem.wiki/waseda-tokyo/">Cell Freedom ~ Expanding the Possibility of cell-free system</NuxtLink></b>では、Gold MedalとBest Foundational Advancement Nominationという成績を得ることができました。
    </Section>
    <Section 
      :Title="`活動内容について`"
      :LinkTo="`/events`">
      週に1回、早稲田大学理工キャンパス61号館1階 <a class="underline text-teal-500 hover:text-teal-500" href="https://www.koubou.sci.waseda.ac.jp/summary/LearningCommons61.html"> ラーニング・コモンズ</a> にてミーティングを行います。
      生物実験は、<a class="underline text-teal-500 hover:text-teal-500" href="https://www.waseda.jp/inst/twins/">早稲田大学 先端生命医科学センター（TWIns）</a> にて行っております。
      その他に、不定期で出張授業、専門家へのインタビュー、iGEM Japan Comunity共同イベントなどを開催しております。
      <br><br>
      <Timeline class="w-3/5 text-center" id="Wasedaigem" sourceType="profile" :options="{ tweetLimit: '2' }"/>
    </Section>
    <Section 
      :Title="`支援方法について`"
      :LinkTo="`/projects`">
      iGEMへの出場には大変多くの金額がかります。チームの登録費が<b>$5500 USD</b>、対面参加費が<b>$3,000 USD</b>、個人参加費が<b>$500 USD</b> <a href="https://competition.igem.org/registration/fees">(引用)</a>さらに実験でも薬剤費がかかります。合成生物学は環境問題、食糧問題を解決するポテンシャルを秘めています。もし私たちの理念に共感してくれる方に、お力添えいただけると幸いです。
    </Section>
  </div>
</template>
<script>
import Section from "../components/Molecules/Section.vue";
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
export default {
  components: {
    Section,
    Timeline
  }
}
</script>


