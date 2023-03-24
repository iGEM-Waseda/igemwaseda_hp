## Dry
iGEMでは、Wet Labと呼ばれる生物実験を行う部門の他に、Dry Labと呼ばれるコンピューターシミュレーションを行う部門もあります。Dryでは、合成生物学の知識を生かして、生物系の知識だけでなく、情報処理やデータ解析などのスキルが求められます。

### Modeling
Modelingとは、Dry Labの中でコンピューターシミュレーションを行う分野のことを指します。以下の項目でModelingの一般的な流れを説明します。

キーワード：[**#数理生物学**](https://forms.gle/d9vutEpNdFtSLneZA) [**#バイオ×プログラミング**](https://forms.gle/d9vutEpNdFtSLneZA)  [**#数学好き**](https://forms.gle/d9vutEpNdFtSLneZA) [**#微分方程式**](https://forms.gle/d9vutEpNdFtSLneZA) [**#シミュレーション**](https://forms.gle/d9vutEpNdFtSLneZA) [**#機械学習**](https://forms.gle/d9vutEpNdFtSLneZA) [**#Alphafold**](https://forms.gle/d9vutEpNdFtSLneZA) [**#Python**](https://forms.gle/d9vutEpNdFtSLneZA) [**#R**](https://forms.gle/d9vutEpNdFtSLneZA) [**#MATLAB**](https://forms.gle/d9vutEpNdFtSLneZA) [**#物理学科**](https://forms.gle/d9vutEpNdFtSLneZA) [**#情報学科**](https://forms.gle/d9vutEpNdFtSLneZA)

#### 1. 人工遺伝子回路の構築
iGEMのプロジェクトでは、目的の化学物質を生成するために人工遺伝子回路を構築する必要があります。人工遺伝子回路とは、生物内部の遺伝子やタンパク質の働きを模倣した、合成的な遺伝子回路のことです。人工遺伝子回路は、転写因子やプロモーター、レポーター遺伝子などの要素から構成されます。転写因子は、遺伝子発現を調節するためのタンパク質で、プロモーターは転写因子が結合する場所で、レポーター遺伝子は、遺伝子発現の結果を可視化するための遺伝子です。これらの要素はオープンソースのパーツとしてiGEM運営が管理しており、実際に発注し実験することができます。また、人工遺伝子回路は単純な活性化、抑制だけでなく、AND回路、OR回路などの論理回路を作成することもできます。以下の図はiGEM 2022で構築したプロゲステロンとエストロゲンの波形を検出する人工遺伝子回路です。

|![](/images/dry-modeling-1.png)|![](/images/dry-modeling-2.png)|
|---|---|
|||


#### 2. pythonによる微分方程式のシミュレーション
人工遺伝子回路が想定した挙動をするか、コンピューターシミュレーションを通して検証する必要があります。そのためには、まず以下のような微分方程式を立てます。この式は、[ヒルの式](https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%AB%E3%81%AE%E5%BC%8F#:~:text=%E3%83%92%E3%83%AB%E3%81%AE%E5%BC%8F%EF%BC%88%E3%83%92%E3%83%AB%E3%81%AE,%E3%81%84%E3%82%8B%E3%81%8C%E3%80%81%E9%96%A2%E4%BF%82%E3%81%AF%E3%81%AA%E3%81%84%E3%80%82)や[ミカエリス・メンテン式](https://ja.wikipedia.org/wiki/%E3%83%9F%E3%82%AB%E3%82%A8%E3%83%AA%E3%82%B9%E3%83%BB%E3%83%A1%E3%83%B3%E3%83%86%E3%83%B3%E5%BC%8F)をもとに立てられます。

![](/images/ode-1.png)

次に、プログラミングで上記の微分方程式を解きます。言語はPython, R, MATLABなどが一般的です。 以下の図は上記の微分方程式を解いた結果です。

|![](/images/dry-modeling-3.png)|![](/images/dry-modeling-4.png)|
|---|---|
|||


#### 3. その他のシミュレーション
上記で紹介したのは最も一般的な例です。これ以外にも、Alphafoldを利用したタンパク質立体構造予測、ロジスティクス方程式やセルオートマトンを利用したシミュレーションなど様々なものがあります。

### Software
Softwareとは、Dry Labの中でソフトウェア開発を行う分野のことを指します。その用途は主に、シミュレーションしやすくためのGUIまたはCUIツール(Modeling関連)、合成生物普及のためのアプリやゲーム(Education関連)、ハードウェア操作用のツール(Hardware関連)などがあります。以下３つの例を紹介します。

キーワード： [**#アプリ開発**](https://forms.gle/d9vutEpNdFtSLneZA) [**#ゲーム開発**](https://forms.gle/d9vutEpNdFtSLneZA) [**#Unity**](https://forms.gle/d9vutEpNdFtSLneZA) [**#Python**](https://forms.gle/d9vutEpNdFtSLneZA) [**#GUI**](https://forms.gle/d9vutEpNdFtSLneZA) [**#情報学科**](https://forms.gle/d9vutEpNdFtSLneZA) 

#### 1. Toggle Switch Simulator
iGEM Waseda 2022で開発した微分方程式のパラメータを直感的に操作できる教育ツールです。
リンク： [https://tomoino.github.io/education-tool/](https://tomoino.github.io/education-tool/)
![](/images/dry-software-2.png)

#### 2. BiosensorPuzzle
iGEM Waseda 2022で開発したバイオセンサー検出の仕組みを表したゲームです。
リンク： [https://bishopfunc.github.io/BiosensorPuzzle/](https://bishopfunc.github.io/BiosensorPuzzle/)
![](/images/dry-software-1.png)

#### 3. Genochemy
iGEM UTokyo 2022が開発した遺伝子回路を直感的に組み立てて仕組みを理解することができる教育ツールです。iGEM Waseda 2022のメンバーはグラフ描画機能の開発の一部に貢献しました。
リンク： [https://genochemy.netlify.app/](https://genochemy.netlify.app/)
![](/images/dry-software-3.png)

### Hardware
Hardwareとは、Dry Labの中でハードウェア開発を行う分野のことを指します。iGEM 2022では、自宅でも使えるホルモン検出デバイスを提案しました。Hardwareの製作は3Dモデリング班と電子工作班に分けられます。

キーワード： [**#電子工作**](https://forms.gle/d9vutEpNdFtSLneZA) [**#マイコン**](https://forms.gle/d9vutEpNdFtSLneZA) [**#機械工学科**](https://forms.gle/d9vutEpNdFtSLneZA) [**#ものづくり**](https://forms.gle/d9vutEpNdFtSLneZA) [**#3Dプリンター**](https://forms.gle/d9vutEpNdFtSLneZA) [**#CAD**](https://forms.gle/d9vutEpNdFtSLneZA) [**#建築学科**](https://forms.gle/d9vutEpNdFtSLneZA)  

#### CADによる3Dモデリング
iGEM 2022では、CADでモデルを設計し、3Dプリンターで出力しました。

![](/images/dry-hardware-1.png)

#### マイコンによる制御部の製作
iGEM 2022は制御部の開発が間に合いませんでしたが、次年度ではデバイスにより実現性をもたせるため、制御部もしっかり設計していきたいと考えています。サークルの経費で必要なパーツを購入でき、事業化レベルのハードウェア開発に携われます。電子工作やものづくりに興味ある方はぜひ入会ご検討ください。

![](/images/dry-hardware-3.png)

### Measurement 
Measurementとは、Dry Labの中で実験結果の測定に関する分野のことを指します。iGEMチームによる成果は将来のチームやコミュニティ全体で使用できます。これを実現するには適切な測定が不可欠です。優れた測定が科学の進歩つながると考えています。単純に実験を行うだけでなく、適切なデータの視覚化、統計分析のスキルが求められます。

以下が代表的なMeasurementプロジェクトの例です。
- iGEM Partsの厳密な特性評価
- 測定対象の革新
- DNAリーディング技術の革新
- データのコラボレーションと共有

参考：
- [https://2020.igem.org/Measurement/Introduction](https://2020.igem.org/Measurement/Introduction)
- [https://2020.igem.org/Measurement/Examples](https://2020.igem.org/Measurement/Examples)

キーワード： [**#データ可視化**](https://forms.gle/d9vutEpNdFtSLneZA) [**#標準化**](https://forms.gle/d9vutEpNdFtSLneZA) [**#統計**](https://forms.gle/d9vutEpNdFtSLneZA)  [**#データサイエンス**](https://forms.gle/d9vutEpNdFtSLneZA) [**#CAD**](https://forms.gle/d9vutEpNdFtSLneZA) [**#Python**](https://forms.gle/d9vutEpNdFtSLneZA) [**#R**](https://forms.gle/d9vutEpNdFtSLneZA) [**#MATLAB**](https://forms.gle/d9vutEpNdFtSLneZA) [**#数学科**](https://forms.gle/d9vutEpNdFtSLneZA) [**#情報学科**](https://forms.gle/d9vutEpNdFtSLneZA)

