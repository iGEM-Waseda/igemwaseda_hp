
<template>
  <div>
    <HomeImage/>
    <!-- <Crowdfunding/> -->
    <Section :menu="`igem`">
      iGEM(<b>I</b>nternational <b>G</b>enetically <b>E</b>ngineered <b>M</b>achine)は、国際的な合成生物学の大会です。大会では、BioBricksという生物の遺伝子を規格化したパーツを配布し、それらを組み合わせて、社会に役立つ生物を作り出すことを目指しています。過去のプロジェクトでは、環境中の有害物質を検出する大腸菌や、養殖魚の病気を検知する大腸菌などが開発され、学生たちの力で社会的・ビジネス的な課題が解決されています。
    </Section>
    <Section :menu="`synbio`">
      合成生物学は、今注目を浴びている最先端の研究分野です。組織・細胞・遺伝子などの生物の構成要素を部品とみなし、それらを組み合わせて生命機能を人工的に設計したり、人工の生物システムを構築する学問分野だと言われています。(日経バイオテクONLINEより転載)。
    </Section>
    <Section :menu="`projects`">
      <b>2024年度大会</b>では、<a class="underline text-teal-500 hover:text-teal-600" href="https://2024.igem.wiki/waseda-tokyo/">「PET TWINS -PETase The Way to ImplementatioN Success-」</a>をテーマに、大学生チームTop10をはじめとする、以下の賞を受賞することができました。この成績は日本の大学チーム過去最高の成績で、2つのトロフィーと1つの金メダルを日本に持ち帰ることができました。
      <img class="w mx-auto pt-2 pb-2" src="/images/awards2024.png" alt="Awards of iGEM Waseda Tokyo 2024"/>
      <p><b>・Undergraduate Top10（学部生部門トップ10入賞）</b><br>
      195チームが参加した大学学部生部門において、iGEM 21年の歴史で日本チームとして初めてトップ10に選ばれる快挙を達成しました。</p><br>

      <p><b>・Best Bioremediation Project（環境浄化部門優勝）</b><br>
      今大会ではiGEM-WasedaはBioremediation（環境浄化）部門にエントリーしました。プラスチック分解を通じた環境浄化プロジェクトが高く評価され、この部門に参加した18チームの中で、見事優勝を果たしました。</p><br>

      <p><b>・Best New Composite Part（新規遺伝子パーツ賞 最優秀賞）</b><br>
      開発した「BIND-bearPETase」が合成生物学の新たな可能性を切り拓いたとして、最優秀賞に輝きました。</p><br>

      <p><b>・Nominee for Best Model（モデル賞 受賞）</b><br>
      シミュレーションを用いた研究成果が評価され、最終候補にノミネートされ上位5チームに選ばれました。</p><br>

      <p><b>・Nominee for Best Wiki（Webページデザイン賞受賞）</b><br>
      私たちのプロジェクトWebページが、わかりやすく洗練されたデザインで評価され、上位10チームに選ばれました。iGEM-Waseda2024のWikiは<a class="underline text-teal-500 hover:text-teal-600" href="https://2024.igem.wiki/waseda-tokyo/">こちら</a>から。</p><br>

      <p><b>・Gold Medal</b><br>
      iGEMが規定したすべての基準を達成することができ、金メダルを獲得することができました。</p><br>

      <b>2022年度大会</b>では、<a class="underline text-teal-500 hover:text-teal-600" href="https://2022.igem.wiki/waseda-tokyo/">「Cell Freedom  ~ Expanding the Possibility of cell-free system ~」</a>をテーマに、ゴールドメダルを獲得し、また基礎技術開発部門(Foundational Advancement)の最優秀賞候補にノミネートされました。
      <br><br>

      <b>2020年度大会</b>では、<a class="underline text-teal-500 hover:text-teal-600" href="https://2020.igem.org/Team:Waseda">「Zombie vs Samurai」</a> をテーマに、初のゴールドメダルだけでなく、情報処理部門(Information Processing)で最優秀賞を獲得し、教育部門で3位以内にノミネートされました。<br>
    </Section>
    <Section :menu="`events`">
      iGEM Wasedaは週に1回、<a class="underline text-teal-500 hover:text-teal-600" target="_blank" href="https://www.koubou.sci.waseda.ac.jp/summary/LearningCommons61.html">61号館1階  ラーニング・コモンズ</a>でミーティングをしています。
      <!-- 生物実験は、<a class="underline text-teal-500 hover:text-teal-500" target="_blank" href="https://www.waseda.jp/inst/twins/">先端生命医科学センター（TWIns）</a>で行っています。 -->
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
      wiki班、video班やillustrator班は年間を通して人員を募集しているので、興味のある方はお気軽にお問い合わせください。
    </Section>
    <Section :menu="`member`">
      iGEM Wasedaは現在1年生15名、2年生4名、3年生10名、4年生1名の計30名で活動しています。生命医科学科、電気・情報生命工学科、教育学部 生物学専修などの生命系だけでなく、情報理工学科や情報通信学科、人間科学部、物理学科、化学・生命化学科、国際教養学部など様々な分野の学生が集まっています。
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
import Crowdfunding from "../components/Molecules/Crowdfunding.vue";
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import HomeImage from '../components/Organisms/HomeImage.vue';
export default {
  components: {
    Crowdfunding,
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

