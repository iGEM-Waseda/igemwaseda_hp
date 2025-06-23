<template>
  <!-- team - start -->
  <div>
    <MarkDown :filepath="filepath" />
    <div class="max-w-screen-lg px-4 md:px-8 mx-auto sm:my-8 my-16">
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Team Leaders
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/ryota-abe.png')"
          :name="`阿部 諒太`"
          :team="`【幹事長】/ Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`私立武蔵高校`"
          :hobbies="`サッカー、格闘技観戦、漫画`"
          :introText="`有り余った体力を活かしてチームで世界に羽ばたきたいです！ `"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/masahiro-chiba.png')"
          :name="`千葉 将博`"
          :team="`【副幹事長】/ Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`都立日比谷高校`"
          :hobbies="`テニス、ポケモン、ギター`"
          :introText="`合成生物学の力で早稲田から世界に貢献します！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/daisuke-kondo.png')"
          :name="`近藤 大介`"
          :team="`【会計】/ Wet / HP`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`スポーツ観戦、百貨店めぐり`"
          :introText="`ただ好きなことを研究して終わりではなく、社会実装までを考えて発表することにとても惹かれました！頑張ります！`"
        />
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Senior(B4)
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
        <MemberCard
          :imagePath="require('@/assets/image/member/rafael-mugi-suzuki.png')"
          :name="`Rafael Mugi Suzuki`"
          :team="`Dry`"
          :major="`医学部医学科`"
          :highSchool="`さいたま市立浦和高校`"
          :hobbies="`物理・化学・機械学習などの勉強、アニメ`"
          :introText="`既存の技術を極め、誰も気づいていない応用先を開拓します。やがては新しいモデルや理論を生み出せるよう、実装を通じて理解を深めたいです。`"
        />
      </div>
      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Junior(B3)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
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
          :imagePath="require('@/assets/image/member/shietsu-ko.png')"
          :name="`高 子越`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`安田学園高校`"
          :hobbies="`ミツバチの飼育と観察、読書、散歩、ゲーム、論文を読むことetc`"
          :introText="`実験がんばります！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/sena-takahashi.png')"
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
          :imagePath="require('@/assets/image/member/kazuki-hayashi.png')"
          :name="`林 和希`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田高校`"
          :hobbies="`ハイキング/温泉巡り/街歩き/建築/寺社巡り/菜園/鉄道/献血`"
          :introText="`生物・生命に胸いっぱいの愛を届けます！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/shiho-maeda.jpg')"
          :name="`前田 志帆`"
          :team="`Wet`"
          :major="`先進理工学部 化学・生命化学科`"
          :highSchool="`渋谷教育学園渋谷高校`"
          :hobbies="`音楽/美術館巡り/読書`"
          :introText="`学び続けて合成生物学で世界を目指します！`"
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
          :hobbies="`散歩、国際政治研究、物理`"
          :introText="`世界の誰も知らない答えを、持ち得る数理の言葉で説明します！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/yuto-toriyama.jpg')"
          :name="`鳥山 優人`"
          :team="`Dry`"
          :major="`基幹理工学部 情報通信学科`"
          :highSchool="`早稲田大学系属早稲田実業学校高等部`"
          :hobbies="`旅行/鉄道/昔の曲を聴く`"
          :introText="`生物×プログラミングという言葉に惹かれて入会しました。世界に通用する早稲田を目指して頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/jun-kawabata.jpg')"
          :name="`川端 準`"
          :team="`Dry`"
          :major="`人間科学部 人間情報科学科`"
          :highSchool="`早稲田渋谷シンガポール校`"
          :hobbies="`語学、読書、プログラミング、鉄道`"
          :introText="`バイオインフォマティックスの分野で頑張っていきます。よろしくお願いします。`"
        />
      </div>

      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Sophomore(B2)
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
          :highSchool="`島根県立松江北高等学校`"
          :hobbies="`テニス、野球観戦、美味しいものを食べる`"
          :introText="`合成生物学やバイオインフォマティクスに魅力を感じ、入会しました。たくさんのことを学びながら全力で頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/taita-horiuchi.jpg')"
          :name="`堀内 太登`"
          :team="`Wet`"
          :major="`先進理工学部 化学・生命化学科`"
          :highSchool="`横浜翠嵐高校`"
          :hobbies="`ジャズ/サックス`"
          :introText="`iGEMに参加した高校のOBの方のお話を聴き興味を持ち、参加しました。全力で頑張ります！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/ryosei-kimura.png')"
          :name="`木村 遼生`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`土浦日本大学高等学校`"
          :hobbies="`食べ歩き/服/写真`"
          :introText="`不屈の探究心で、世界に通用するプロジェクトを作り上げます！`"
        />

        <MemberCard
          :imagePath="require('@/assets/image/member/keigo-marubashi.jpg')"
          :name="`丸橋 慶吾`"
          :team="`HP`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`西大和学園`"
          :hobbies="`野球観戦`"
          :introText="`チームの力になれるように頑張ります！`"
        />
      </div>

      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Freshman(B1)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/nao-ishida.jpg')"
          :name="`石田 那央`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`釣り`"
          :introText="`生物の可能性を知りたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/manaka-saito.jpg')"
          :name="`齋藤 愛果`"
          :team="`Wet`"
          :major="`教育学部 理学科 生物学専修`"
          :highSchool="`大妻多摩高等学校`"
          :hobbies="`音楽（Eve、ヨルシカ、ずとまよ）を聴くこと`"
          :introText="`分野を限らず生物学を極めていきたいです！頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/chiaki-naito.jpg')"
          :name="`内藤 千晶`"
          :team="`Wet`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`早稲田大学本庄高等学院`"
          :hobbies="`ハリーポッターを観る`"
          :introText="`いつでもわくわくを忘れずに、世界に挑戦します！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/saori-nagai.jpg')"
          :name="`永井 さほり`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`渋谷教育学園渋谷高校`"
          :hobbies="`音楽/散歩`"
          :introText="`大好きな生物で多くのことを吸収してチームに貢献します！！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/sota-nagase.jpg')"
          :name="`長瀨 颯太`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`島根県立松江北高等学校`"
          :hobbies="`音楽`"
          :introText="`生物への愛をもっと深めます！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/yori-nagase.jpg')"
          :name="`長瀬 瑶莉`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`神戸女学院高等学部`"
          :hobbies="`読書`"
          :introText="`しっかり学んで、チームに貢献できるように頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/eito-yamada.jpg')"
          :name="`山田 瑛斗`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`早稲田大学系属早稲田実業学校高等部`"
          :hobbies="`筋トレ/ボルダリング`"
          :introText="`パッションで世界を目指します！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/aki-yamamoto.jpg')"
          :name="`山本 秋希`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`開成高校`"
          :hobbies="`音楽/読書`"
          :introText="`合成生物学の知見を深めます！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/shoko-aoyama.jpg')"
          :name="`青山 渉子`"
          :team="`Dry`"
          :major="`基幹理工学部 学系3`"
          :highSchool="`早稲田渋谷シンガポール校`"
          :hobbies="`音楽/珈琲`"
          :introText="`情報技術の持つ可能性を探求し、チームの一員として力になれるよう全力を尽くします！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/karen-kaito.jpg')"
          :name="`皆藤 華恋`"
          :team="`Dry`"
          :major="`基幹理工学部 学系3`"
          :highSchool="`早稲田大学系属早稲田実業学校高等部`"
          :hobbies="`絵/音楽/読書/映画`"
          :introText="`生物も情報も好きなので、好きを糧に実直に学んで行きたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/ryunosuke-komachi.jpg')"
          :name="`小町 龍之介`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`早稲田大学本庄高等学院`"
          :hobbies="`食べること/美術館巡り/旅行`"
          :introText="`しっかりと勉強してシミュレーションなどできるようになりたいです！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/suzu-shimokawa.jpeg')"
          :name="`下川 翠珠`"
          :team="`Dry`"
          :major="`基幹理工学部 学系1`"
          :highSchool="`広尾学園高等学校`"
          :hobbies="`音楽`"
          :introText="`Dryでチームに貢献します。頑張ります！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/takuma-tashiro.jpg')"
          :name="`田代 逞真`"
          :team="`Dry`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`海城高等学校`"
          :hobbies="`走ること`"
          :introText="`情報技術を学び、生物を探求します！チームに貢献できるよう、頑張ります！`"
        />
      </div>

      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Instructors
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/toru-asahi.png')"
          :name="`朝日 透`"
          :team="`Principal Investigator`"
          :major="`理工学術院先進理工学部 生命医科学科 教授`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/daisuke-kiga.png')"
          :name="`木賀 大介`"
          :team="`Advisor`"
          :major="`理工学術院先進理工学部 電気・情報生命工学科 教授`"
        />
      </div>

      <h2 class="text-gray-800 text-2xl md:text-4xl font-bold text-start my-8">
        Alumni(M1)
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
        Alumni(B4)
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12"
      >
        <MemberCard
          :imagePath="require('@/assets/image/member/ryutaro-aonuma.jpg')"
          :name="`青沼 龍太朗`"
          :team="`Wet`"
          :major="`先進理工学部 生命医科学科`"
          :highSchool="`麻布高校`"
          :hobbies="`生物採集/スキンダイビング/登山/スキー/邦ロック`"
          :introText="`マクロからミクロまで、生物に関すること全てに興味があります。海と生物への愛で世界を変えたい！`"
        />
        <MemberCard
          :imagePath="require('@/assets/image/member/hana-watanabe.jpg')"
          :name="`渡辺 華`"
          :team="`Wet`"
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
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/ryoya-otsuki.png')"
          :name="`大附 綾也`"
          :team="`Wet`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`川越東高等学校`"
          :hobbies="``"
          :introText="``"
        /> -->
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
          :hobbies="`スノーボード、バイク、コンピュータ`"
          :introText="`コンピュータの応用として興味があったので入りました！頑張ります。`"
        />
        <!-- <MemberCard
          :imagePath="require('@/assets/image/member/taiki-kajiyama.jpg')"
          :name="`梶山 太軌`"
          :team="`Dry`"
          :major="`先進理工学部 電気・情報生命工学科`"
          :highSchool="`早稲田大学高等学院`"
          :hobbies="`海外旅行、語学、筋トレ`"
          :introText="`iGEMとG.E.M.が好き`"
        /> -->

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
