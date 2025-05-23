# プロジェクト紹介
## 2024 プロジェクト
2024年のiGEM-Wasedaは、プラスチックごみ問題に注目し、プラスチックリサイクルにおける課題解決に挑戦しました。私たちのプロジェクト「PET TWINS」は、このような環境問題への取り組みとして、PETを特異的に分解する酵素「PETase」の産業利用を促す新たなシステムを構築しました。PETはプラスチックの中でも特に頑強な構造を持ち、リサイクルにおける障壁なりますが、PETaseを用いるといくつかの種類のプラスチックを含む素材からPETを選択的に除去し、資源の効率的な再利用が期待できます。

![](/images/pet-degradation.png)

しかし、これまでPETaseを社会に実装するには、酵素精製に伴うコストや活性低下、大腸菌の制御と安全性確保といった課題が存在しました。そこで私たちは、PETaseを安定的かつ効率的に機能させる「BIPモジュール」と、電気刺激による遺伝子発現制御でバイオセーフティを担保する「ECBモジュール」を統合した「PET TWINS」を開発しました。

![](/images/bip-and-ecb.png)

BIPモジュールでは、細菌表面にPETaseを固定化することによって、精製工程を省略しつつ、酵素の安定性と再利用性を向上させました。また、進化工学を用いてPETaseを改変したBIND-bearPETaseを設計し、実験やシミュレーションを通してその高い分解性能を検証しました。

![](/images/bip-abstract.png)

一方、ECBモジュールでは、電気刺激によって段階的に遺伝子発現を制御する仕組みを導入しました。これにより、PET分解後に自殺遺伝子を誘導し、反応液から大腸菌を確実に除去することが可能になります。また、酵素発現開始のタイミングを調整できるため、大腸菌への負荷を減らし、より安定した利用が期待できます。

![](/images/ecb-abstract.png)

「PET TWINS」は、産業規模のプラントでPET分解に適用できると想定しています。モデリングや関係者へのインタビュー、社会実装への考察を通じて、私たちはこのシステムがPETase活用の大きな一歩となり、プラスチックリサイクル促進とプラスチックごみ問題解決に貢献できると考えています。

![](/images/implementation-plant-new.png)

## 2022 プロジェクト
![](/images/project-11.png)
私たち iGEM 早稲田東京チームは、セルフリー技術を利用したバイオセンサーの開発に取り組みました。私たちのプロジェクトは、2 つのホルモンの検出に特化した家庭用電気化学バイオセンサーと自動精子放出カプセルの開発を目指しており、これによって検出対象の範囲や出力タイプの向上を目指しています。
![](/images/project-7.png)
このプロジェクトは、細胞の制約から解放されたセルフリーの検出プラットフォームの利点を活かすことができます。
![](/images/project-8.png)
私たちの考えた遺伝子回路では、2 つの女性ホルモン（エストロゲン、プロゲステロン）のバランスに応答して下流遺伝子の発現を調節する能力を持ちます。
これにより、生理周期に応じたホルモンバランスの変化を高感度かつ迅速に検出することが可能となり、家庭や診療所での利用が容易になると考えました。
また、ホルモン以外の物質検出を目指して、新しい遺伝子部品の開発も進めました。その一例として私たちは、電気化学センサーを利用した環境中の有害物質を検出にも取り組みました。農薬に含まれるアトラジンや環境中の重金属に焦点を当て、環境に配慮したバイオセンサーの開発を目指しました。
![](/images/project-9.png)
![](/images/project-10.png)
このプロジェクトでは、2022 大会での Gold Medal の獲得および Best Foundational Advanced Project Track にノミネートされました。


## 2020 プロジェクト
![](/images/project-1.png)
2020 年の iGEM 早稲田チームは、細胞間コミュニケーションを利用したプロジェクトに取り組みました。私たちは細胞状態をゾンビと侍に見立て、通信分子濃度による両者の戦いのストーリーを描きました。両者は他方の遺伝子発現を抑制する関係にあり、遺伝子回路の状態に応じて、ゾンビ細胞と侍細胞の数は変化します。
![](/images/project-2.png)
このモデルの実証のために遺伝子回路に関する微分方程式を解き、トグルスイッチを作成しました。詳しくは Dry ページをご参照ください。[チーム - iGEM Waseda](team#dry)
![](/images/project-3.png)
このゾンビ対侍のシナリオを実装するために私たちは無細胞システムを利用しました。
私たちは、香料や燃料、殺虫剤などに利用されるモノテルペン（リモネンとサビネン）を無細胞系で合成することに成功しました。無細胞合成系を利用することでモノテルペンの毒性により細胞内で合成できなくなるという障壁を回避しました。また、無細胞システムを利用することで、たくさんの種類の遺伝子を 1 つの細胞に導入する手間を省くことができ、複数種類の細胞抽出液を組み合わせることで、より簡単に複雑な合成経路を作製できました。
![](/images/project-4.png)
香りの経時変化のシミュレーションのために incoherent feed forward loop（インコヒーレント　フィードフォワード　ループ）（IFFL）を拡張したマルチターゲット IFFL を開発しました。IFFL とは遺伝子 Z の濃度が時間経過に伴ってパルス状に変化する基本的な遺伝子回路です。私たちが開発した Multi IFFL では遺伝子 X と遺伝子 Y によって遺伝子 Z の発現の制御を目標にしました。モデリングのパラメータを変化させることで 2 つのパルスの形状およびピーク間の時間差の調製に成功しました。
![](/images/project-5.png)
また、ゾンビ対サムライのストーリーラインでは、一方が相手から必要な食料を奪うというシナリオを想定しました。つまり、一方が D-アミノ酸を摂取し、もう一方が L-アミノ酸由来の食物を摂取し、双方が相手のアミノ酸を変換して自分だけが食べられるようにします。特に、抗菌薬開発の魅力的なターゲットとして知られているアラニン ラセマーゼ (AR) に注目しまし。D-アラニンとラセマーゼに依存する無細胞タンパク質合成を使用して、変換を確認しました。
![](/images/project-6.png)
このプロジェクトでは、2020 大会での Gold Medal の獲得および Best Information Processing Track Award を受賞しました。また，Best Education Award のノミネートも果たしました。詳しくは Human Practice のページ[チーム - iGEM](team)および 2020 の[wiki](https://2020.igem.org/Team:Waseda/) をご覧ください。


