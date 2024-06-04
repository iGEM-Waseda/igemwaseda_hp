<template>
  <!-- team - start -->
  <div>
    <MarkDown :filepath="filepath" />
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto sm:my-8 my-16">
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Senior(B4)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/ryojun-hayashizaki.jpg')"
          :name="`林﨑 諒巡`"
          :team="`Wet / HP`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`合成生物学/スキューバダイビング/水球/マクドナルド/珈琲/カフェ巡り/麻雀/星野源の音楽を聴くこと`"
          :introText="`生物学の可能性を広げたい！その一心で研究とチームマネジメントに邁進します。さあ、早稲田から世界へ。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ayaka-sasaki.jpg')"
          :name="`佐々木 彩佳`"
          :team="`Dry`"
          :major="`奈良県立医科大学 医学部医学科`"
          :highSchool="`早稲田大学本庄高等学院`"
          :hobbies="`クラッシック音楽/キーボード/研究`"
          :introText="`Modelingで成果を出せるように頑張ります(  ´͈ ᵕ ' )و`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sei-tsukamura.jpg')"
          :name="`束村 晴`"
          :team="`Dry / Wet`"
          :major="`先進理工学部 化学・生命化学科`"
          :highSchool="`横浜翠嵐高校`"
          :hobbies="`周期表/空手/小説執筆`"
          :introText="`生命の最小単位を探る合成生物学に惹かれました。良い成果が得られるよう、人事を尽くします。`"
        />
       
        <MemberCard
          :imagePath="require('@/assets/image/member/shota-yamamoto.png')"
          :name="`山本 翔太`"
          :team="`Dry / Wiki`"
          :major="`基幹理工学部 情報理工学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`美術館に行く`"
          :introText="`プログラミングちょっとできる、生物ナンモワカラン`"
        />        
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Junior(B3)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/ryutaro-aonuma.jpg')"
          :name="`青沼 龍太朗`"
          :team="`【幹事長】/ Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`麻布高校`"
          :hobbies="`生物採集/スキンダイビング/登山/スキー/邦ロック`"
          :introText="`マクロからミクロまで、生物に関すること全てに興味があります。海と生物への愛で世界を変えたい！`"
        />      
        <MemberCard
          :imagePath="require('@/assets/image/member/hana-watanabe.jpg')"
          :name="`渡辺 華`"
          :team="`【会計】/ Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`開智高校`"
          :hobbies="`料理、旅行`"
          :introText="`いろんなことに興味があります！どんどん吸収していきたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/haruka-nakamura.png')"
          :name="`中村 春香`"
          :team="`Wet / Video`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`東洋英和女学院`"
          :hobbies="`運動、睡眠、音楽、糖分`"
          :introText="`educationとwet頑張ります！！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/wakana-nanba.jpg')"
          :name="`難波 和佳奈`"
          :team="`Wet`"
          :major="`先進理工学部 化学・生命化学科`"
          :highSchool="`愛知県立明和高等学校`"
          :hobbies="`海外旅行、食、笑うこと、笑わせること`"
          :introText="`夢は、世界一周とiGEMで世界をとることです。どっちも叶えたい！`"
        />         
        <MemberCard
          :imagePath="require('@/assets/image/member/ryoya-otsuki.png')"
          :name="`大附 綾也`"
          :team="`Wet`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`川越東高等学校`"
          :hobbies="``"
          :introText="``"
        />                   
        <MemberCard
          :imagePath="require('@/assets/image/member/joseph-yokobori.jpg')"
          :name="`横堀 襄`"
          :team="`Dry`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`鉄道、旅行、クラリネット`"
          :introText="`生物の可能性は無限大！と思って活動していきたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ryoto-miyamoto.jpg')"
          :name="`宮本 遼人`"
          :team="`Dry / Wiki`"
          :major="`基幹理工学部 情報理工学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="``"
          :introText="``"
        />     
        <MemberCard
          :name="`梶山 太軌`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`早稲田大学高等学院`"
        />                
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Sophomore(B2)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
      <MemberCard
          :imagePath="require('@/assets/image/member/ryota-abe.jpg')"
          :name="`阿部 諒太`"
          :team="`【副幹事長】/ Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`私立武蔵高校`"
          :hobbies="`サッカー、格闘技観戦、漫画`"
          :introText="`有り余った体力を活かしてチームで世界に羽ばたきたいです！ `"
        />      
        <MemberCard
          :imagePath="require('@/assets/image/member/yuko-ota.jpg')"
          :name="`太田 裕子`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`桜蔭高校`"
          :hobbies="`犬を構うこと、茶葉収集`"
          :introText="`生物を設計するという言葉に惹かれました。楽しみながら頑張りたいです。`"
        />                
        <MemberCard
          :imagePath="require('@/assets/image/member/haruka-harada.png')"
          :name="`原田 遥`"
          :team="`Wet`"
          :major="`教育学部 理学科 生物学専修`"
          :highSchool="`横浜緑ケ丘高校`"
          :hobbies="`お散歩`"
          :introText="`生物学への愛を深めたいです。頑張ります。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/shietsu-ko.jpg')"
          :name="`高 子越`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`安田学園高校`"
          :hobbies="`ミツバチの飼育と観察、読書、散歩、ゲーム、論文を読むことetc`"
          :introText="`実験がんばります！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/daisuke-kondo.png')"
          :name="`近藤 大介`"
          :team="`Wet / HP`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`スポーツ観戦、百貨店めぐり`"
          :introText="`ただ好きなことを研究して終わりではなく、社会実装までを考えて発表することにとても惹かれました！頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sena-takahashi.jpg')"
          :name="`高橋 せな`"
          :team="`Wet / Design`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`加藤学園暁秀高校`"
          :hobbies="`お出かけ、読書`"
          :introText="`新しい発想から生物を設計する研究をするという合成生物学に惹かれて入会しました。研究やイラスト制作など色々頑張っていきます！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/chiyo-handa.jpg')"
          :name="`半田 知世`"
          :team="`Design`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`土浦一高`"
          :hobbies="`散歩/コーヒー/絵`"
          :introText="`自分たちで新しく生み出すことが最大の魅力だと感じています。力になれるよう、ベストを尽くします！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/eito-yamamoto.png')"
          :name="`山本 瑛登`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`横浜サイエンスフロンティア高校`"
          :hobbies="`競技クイズ、短歌`"
          :introText="`大好きな生物学で世界に挑戦したい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/itsuki-togawa.png')"
          :name="`戸川 樹`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`薬園台高校`"
          :hobbies="`音楽を聞く、ゲーム`"
          :introText="`数学と生物という、やりたかったことをやれる事になって嬉しいです。頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/soudai-nao.png')"
          :name="`奈尾 颯大`"
          :team="`Dry`"
          :major="`先進理工学部 物理学科`"
          :highSchool="`立教池袋高等学校`"
          :hobbies="`クラシック音楽、ピアノ、読書、散歩`"
          :introText="`真剣に研究して、楽しんで、世界の舞台で挑戦したい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/yuto-toriyama.jpg')"
          :name="`鳥山 優人`"
          :team="`Dry`"
          :major="`基幹理工学部 情報通信学科`"
          :highSchool="`早稲田実業学校`"
          :hobbies="`旅行/鉄道/スキー/昔の曲を聴く`"
          :introText="`生物×プログラミングという言葉に惹かれました。頑張ります！`"
        />        
        <MemberCard
          :imagePath="require('@/assets/image/member/jun-kawabata.jpg')"
          :name="`川端 準`"
          :team="`Dry`"
          :major="`人間科学部 人間情報科学科`"
          :highSchool="`早稲田大学系属早稲田渋谷シンガポール校`"
          :hobbies="`語学、読書、プログラミング、鉄道`"
          :introText="`バイオインフォマティックスの分野で頑張っていきます。よろしくお願いします。`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/tohko-victoria-okazaki.jpg')"
          :name="`岡崎 ヴィクトリア 瞳子`"
          :team="`HP`"
          :major="`Major in Physics`"
          :highSchool="`清泉インターナショナルスクール`"
          :hobbies="`ケーキ作り、インスタグラム更新、音楽鑑賞（King Gnu、Kroi、洋楽ロック）`"
          :introText="`合成生物学の可能性に惹かれました！今後世の中にとって必要になるものを形作れるように、頑張ります！`"
        />        
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Freshman(B1)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >      
        <MemberCard
          :imagePath="require('@/assets/image/member/juri-kawazu.jpg')"
          :name="`河津 樹里`"
          :team="`Wet / HP`"
          :major="`国際教養学部`"
          :highSchool="`広尾学園`"
          :hobbies="`猫と遊ぶこと、踊ること`"
          :introText="`合成生物学という学問、研究の社会実装を目指すこと、チームで世界を目指すことのすべてに魅力を感じました！全力で頑張ります！`"
        />        
        <MemberCard
          :imagePath="require('@/assets/image/member/chiharu-kiyoda.png')"
          :name="`清田 千遥`"
          :team="`Wet`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`松江北高`"
          :hobbies="`テニス、野球観戦、美味しいものを食べる`"
          :introText="`合成生物学やバイオインフォマティクスに魅力を感じ、入会しました。たくさんのことを学びながら全力で頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/masahiro-chiba.jpg')"
          :name="`千葉 将博`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`都立日比谷高校`"
          :hobbies="`テニス、ポケモン、ギター`"
          :introText="`合成生物学の力で早稲田から世界に貢献します！`"
        />          
        <MemberCard
          :name="`堀内 太登`"
          :team="`Wet`"
          :major="`先進理工学部 化学・生命化学科`"
          :highSchool="`横浜翠嵐高校`"
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
