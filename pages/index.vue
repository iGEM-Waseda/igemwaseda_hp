
<template>
  <div>
    <HomeImage/>
    <Section :menu="`igem`">
      iGEM(<b>I</b>nternational <b>G</b>enetically <b>E</b>ngineered <b>M</b>achine)は、国際的な合成生物学の大会です。大会では、BioBricksという生物の遺伝子を規格化したパーツを配布し、それらを組み合わせて、社会に役立つ生物を作り出すことを目指しています。過去のプロジェクトでは、環境中の有害物質を検出する大腸菌や、養殖魚の病気を検知する大腸菌などが開発され、学生たちの力で社会的・ビジネス的な課題が解決されています。
    </Section>
    <Section :menu="`synbio`">
      合成生物学は、今注目を浴びている最先端の研究分野です。組織・細胞・遺伝子などの生物の構成要素を部品とみなし、それらを組み合わせて生命機能を人工的に設計したり、人工の生物システムを構築する学問分野だと言われています。(日経バイオテクONLINEより転載)。
    </Section>
    <Section :menu="`projects`">
      2020年のプロジェクト<a class="underline text-teal-500 hover:text-teal-500" href="https://2020.igem.org/Team:Waseda">「Zombie vs Samurai」</a> では、初のゴールドメダルだけでなく、情報処理部門(Information Processing)で最優秀賞を獲得し、教育部門での3位以内にノミネートされました。<br>
      2022年のプロジェクト<a class="underline text-teal-500 hover:text-teal-500" href="https://2022.igem.wiki/waseda-tokyo/">「Cell Freedom  ~ Expanding the Possibility of cell-free system ~」</a>では、ゴールドメダルを獲得し、また基礎技術開発部門(Foundational Advancement)の最優秀賞候補にノミネートされました。
    </Section>
    <Section :menu="`events`">
      iGEM Wasedaは週に1回、<a class="underline text-teal-500 hover:text-teal-500" target="_blank" href="https://www.koubou.sci.waseda.ac.jp/summary/LearningCommons61.html">61号館1階  ラーニング・コモンズ</a>でミーティングをしています。
      生物実験は、<a class="underline text-teal-500 hover:text-teal-500" target="_blank" href="https://www.waseda.jp/inst/twins/">先端生命医科学センター（TWIns）</a>で行っています。
      また、不定期で出張授業や専門家へのインタビュー、iGEM Japan Comunity共同イベントなども開催しています。
      <br><br>
      <Timeline class="md:w-3/5 mx-auto" id="Wasedaigem" sourceType="profile" :options="{ tweetLimit: '2' }"/>
    </Section>        
    <Section :menu="`team`">
      iGEMの活動は、生物の研究だけではありません。3つの分野、Wet、Dry、Human Practiceに分かれます。
      Wetでは、先行研究を調査し、生物実験を行います。
      Dryでは、実験をシミュレーションし、デバイスやアプリを作成します。
      Human Practiceの活動は、合成生物学普及のための教育、海外チームとコラボレーション、専門家にインタビュー、事業化計画の作成など多岐にわたります。
      また、成果発表用のウェブサイトを作成するwiki班、プロモーションビデオを作成するvideo班やillustrator班もあります。
      video班やillustrator班は年間を通して人員を募集しているので、興味のある方は気軽にお問い合わせください。
    </Section>
    <Section :menu="`member`">
      iGEM Wasedaは3年生8名、2年生10名の計18名で活動しています。生命医科学科、電気・情報生命工学科、情報理工学部など様々な分野の学生が集まっています。
    </Section>    
    <Section :menu="`fund`">
      私たちiGEM Wasedaは、環境問題や食糧問題を解決するために、合成生物学を活用した実験や調査に取り組んでいます。
      しかし、iGEMへの出場には多大な費用が必要です。登録費($5500 USD)や参加費($3,000 USD)だけでなく、実験に必要な試薬や設備費用もかかります。私たちは、これらの費用を賄うことができず、皆様からのご支援が不可欠となっています。
      私たちの活動に共感いただける方々からの寄付を、心よりお待ちしております。
    </Section>
  </div>
</template>
<script>
import Section from "../components/Molecules/Section.vue";
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import HomeImage from '../components/Organisms/HomeImage.vue';
export default {
  components: {
    Section,
    Timeline,
    HomeImage,
  },
  head: {
    titleTemplate: null,
    title: 'iGEM Waseda'
  }
}
</script>


