<template>
  <!-- team - start -->
  <div>
    <MarkDown :filepath="filepath" />
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto sm:my-8 my-16">
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Junior(B3)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/ryojun-hayashizaki.jpg')"
          :name="`林﨑 諒巡`"
          :team="`幹事長 / Wet / HP`"
          :major="`先進理工学部 生命医科学科 3年`"
          :hobbies="`合成生物学/スキューバダイビング/水球/マクドナルド/珈琲/カフェ巡り/麻雀/星野源の音楽を聴くこと`"
          :introText="`生物学の可能性を広げたい！その一心で研究とチームマネジメントに邁進します。さあ、早稲田から世界へ。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/yuki-hongo.png')"
          :name="`本郷 祐規`"
          :team="`副幹事長 / Wet / Video`"
          :major="`先進理工学部 生命医科学科 3年`"
          :hobbies="`筋トレ、野球観戦、バトミントン、居酒屋巡り`"
          :introText="`中途半端なiGEMはしない。それが私のiGEM流儀。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/kohei-toda.png')"
          :name="`戸田 航平`"
          :team="`会計 / Wet / Video`"
          :major="`先進理工学部 生命医科学科 3年`"
          :hobbies="`マンガ、犬と散歩すること`"
          :introText="`100年経っても語り継がれる、iGEM-Waseda伝説を。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sotaro-iijima.png')"
          :name="`飯島 壮大郎`"
          :team="`Wet / HP-Entrepreneur`"
          :major="`先進理工学部 電気・情報生命工学科 3年`"
          :hobbies="`AI遊び、原付バイク、靴下収集`"
          :introText="`科学で世界を変えます。僕を信じて待っててください！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ayaka-sasaki.jpg')"
          :name="`佐々木 彩佳`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科 3年`"
          :hobbies="``"
          :introText="``"
        />
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/mayu-tsuchiya.png')"
          :name="`土屋 茉由`"
          :team="`Illustrator / Video`"
          :major="`先進理工学部 電気・情報生命工学科 3年`"
          :hobbies="``"
          :introText="``"
        /> -->
        <MemberCard
          :imagePath="require('@/assets/image/member/tomoya-ogawa.png')"
          :name="`小川 智也`"
          :team="`Wiki`"
          :major="`先進理工学部 電気・情報生命工学科 3年`"
          :hobbies="``"
          :introText="``"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/shota-yamamoto.png')"
          :name="`山本 翔太`"
          :team="`Dry / Wiki`"
          :major="`基幹理工学部 情報理工学科 3年`"
          :hobbies="`美術館に行く`"
          :introText="`プログラミングちょっとできる、生物ナンモワカラン`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sei-tsukamura.jpg')"
          :name="`束村 晴`"
          :team="`Dry / Wet`"
          :major="`先進理工学部 化学・生命化学科 3年`"
          :hobbies="``"
          :introText="``"
        />
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Sophomore(B2)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/ryoka-kuwabara.png')"
          :name="`桑原 涼歌`"
          :team="`Wet / Dry`"
          :major="`先進理工学部 電気・情報生命工学科 2年`"
          :hobbies="`テレビ，マンガ，コントラバス`"
          :introText="`分からないことが分かるようになった時とコロニーができた時がiGEMで一番好きです`"
        /> -->
        <MemberCard
          :imagePath="require('@/assets/image/member/ryoya-otsuki.png')"
          :name="`大附 綾也`"
          :team="`HP-Education`"
          :major="`先進理工学部 電気・情報生命工学科 2年`"
          :hobbies="``"
          :introText="``"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/satoki-fukazawa.png')"
          :name="`深沢 仁貴`"
          :team="`Wet / HP-Collaboration`"
          :major="`先進理工学部 生命医科学科 2年`"
          :hobbies="`旅行/ボーっとする/運動`"
          :introText="`寝ることが好きです。夢でもiGEMやってます。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/haruka-nakamura.png')"
          :name="`中村 春香`"
          :team="`Wet / HP-Education`"
          :major="`先進理工学部 生命医科学科 2年`"
          :hobbies="`運動、睡眠、音楽、糖分`"
          :introText="`educationとwet頑張ります！！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/hana-watanabe.jpg')"
          :name="`渡辺 華`"
          :team="`Wet / HP-Collaboration`"
          :major="`先進理工学部 生命医科学科 2年`"
          :hobbies="`料理、旅行`"
          :introText="`いろんなことに興味があります！どんどん吸収していきたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ryutaro-aonuma.jpg')"
          :name="`青沼 龍太朗`"
          :team="`Wet / HP-Education`"
          :major="`先進理工学部 生命医科学科 2年`"
          :hobbies="`生物採集/スキンダイビング/登山/スキー/邦ロック`"
          :introText="`マクロからミクロまで、生物に関すること全てに興味があります。海と生物への愛で世界を変えたい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/joseph-yokobori.jpg')"
          :name="`横堀 襄`"
          :team="`Dry / HP-Collaboration`"
          :major="`先進理工学部 生命医科学科 2年`"
          :hobbies="`鉄道、旅行、クラリネット`"
          :introText="`生物の可能性は無限大！と思って活動していきたいです！`"
        />
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/ema-keino.png')"
          :name="`慶野 恵茉`"
          :team="`Wet / HP-Education`"
          :major="`教育学部 理学科 生物学専修 2年`"
          :hobbies="`読書(ハリーポッター)`"
          :introText="`基礎的な部分もしっかり学び、科学に貢献してみたいと思います。`"
        /> -->
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/kaede-yoshida.png')"
          :name="`吉田 楓`"
          :team="`HP-Education`"
          :major="`先進理工学部 Major in Bioscience 2年`"
          :hobbies="`謎解き、ハローキティ収集`"
          :introText="`iGEMで色々学んで将来の自分への糧にできたらいいなと思っています。`"
        /> -->
        <MemberCard
          :imagePath="require('@/assets/image/member/ryoto-miyamoto.jpg')"
          :name="`宮本 遼人`"
          :team="`Dry / Wiki`"
          :major="`基幹理工学部 情報理工学科 2年`"
          :hobbies="``"
          :introText="``"
        />
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Freshman(B1)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/haruka-harada.png')"
          :name="`原田 遥`"
          :team="`Wet`"
          :major="`教育学部 理学科 生物学専修 １年`"
          :hobbies="`お散歩`"
          :introText="`生物学への愛を深めたいです。頑張ります。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ryota-abe.jpg')"
          :name="`阿部 諒太`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科 1年`"
          :hobbies="`サッカー、格闘技観戦、漫画`"
          :introText="`有り余った体力を活かしてチームで世界に羽ばたきたいです！ `"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/yuko-ota.jpg')"
          :name="`太田 裕子`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科 1年`"
          :hobbies="`犬を構うこと、茶葉収集`"
          :introText="`生物を設計するという言葉に惹かれました。楽しみながら頑張りたいです。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/shietsu-ko.jpg')"
          :name="`高 子越`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科 1年`"
          :hobbies="`ミツバチの飼育と観察、読書、散歩、ゲーム、論文を読むことetc`"
          :introText="`実験がんばります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/eito-yamamoto.png')"
          :name="`山本 瑛登`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科 1年`"
          :hobbies="`競技クイズ、短歌`"
          :introText="`大好きな生物学で世界に挑戦したい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/itsuki-togawa.png')"
          :name="`戸川 樹`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科 1年`"
          :hobbies="`音楽を聞く、ゲーム`"
          :introText="`数学と生物という、やりたかったことをやれる事になって嬉しいです。頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/soudai-nao.png')"
          :name="`奈尾 颯大`"
          :team="`Dry`"
          :major="`先進理工学部 物理学科 1年`"
          :hobbies="`クラシック音楽、ピアノ、読書、散歩`"
          :introText="`真剣に研究して、楽しんで、世界の舞台で挑戦したい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/jun-kawabata.jpg')"
          :name="`川端 準`"
          :team="`Dry`"
          :major="`人間科学部 人間情報科学科 １年`"
          :hobbies="`語学、読書、プログラミング、鉄道`"
          :introText="`バイオインフォマティックスの分野で頑張っていきます。よろしくお願いします。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sayaka-shigemi.jpg')"
          :name="`重見 清香`"
          :team="``"
          :major="`政治経済部学部 政治学科 1年`"
          :hobbies="``"
          :introText="``"
        />
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Instructors
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/daisuke-kiga.png')"
          :name="`木賀 大介`"
          :team="`Principal Investigator`"
          :major="`理工学術院先進理工学部 電気・情報生命工学科 教授`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/toru-asahi.png')"
          :name="`朝日 透`"
          :team="`Principal Investigator`"
          :major="`理工学術院先進理工学部 生命医科学科 教授`"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MarkDown from "../components/MarkDown.vue";
import MemberCard from "../components/Molecules/MemberCard.vue";
export default {
  components: { MarkDown, MemberCard },
  data() {
    return {
      filepath: "member.md",
    };
  },
  head() {
    return {
      title: "メンバー",
      meta: [
        { hid: "og:title", property: "og:title", content: "メンバー" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://igem-waseda.netlify.app/member",
        },
      ],
    };
  },
};
</script>
