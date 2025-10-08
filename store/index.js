export const state = () => ({
  menu: {
    igem: {
      name: "iGEMとは",
      title: "iGEMについて",
      to: 'igem'
    },
    synbio: {
      name: "合成生物学とは",
      title: "合成生物学について",
      to: 'synbio'
    },
    projects: {
      name: "プロジェクト",
      title: "プロジェクト紹介",
      to: 'projects'
    },
    events: {
      name: "活動内容",
      title: "活動内容",
      to: 'events'
    },
    // team: {
    //   name: "チーム",
    //   title: "チーム紹介",
    //   to: 'team'
    // },
    member: {
      name: "メンバー",
      title: "メンバー",
      to: 'member'
    },
    recruiting: {
      name: "入会を希望される方へ",
      title: "入会を希望される方へ",
      to: 'recruiting'
    },
    fund: {
      name: "寄付・協賛",
      title: "寄付・協賛のご案内",
      to: 'fund'
    },
  },
  q_and_a: {
    title: "Q＆A",
    items: [
      {
        question: "どうすれば入会できますか？",
        answer: "新歓説明会に参加してください。"
      },
      {
        question: "特別な知識等は必要ですか？",
        answer: "これまでの知識・経験は不問です！興味のある方はぜひ入会をご検討ください。"
      },
      {
        question: "選抜はありますか？",
        answer: "実験を行う関係上、人数を制限する必要がございます。入会希望者が多くなった場合は、選考を行う場合がございます。その際は、説明会の時にお伝えいたします。"
      },
      {
        question: "日程の都合で新歓説明会に参加が難しそうです。",
        answer: "参加フォームに都合の良い日時を記入してください。こちらで調整いたします。"
      },
      {
        question: "どのくらいの頻度で活動していますか？",
        answer: "毎週行っている定例ミーティングは原則参加となっています。それ以外の活動日は各班に分かれて活動しております。"
      },
      {
        question: "他のサークルと兼サーしたいのですが、可能ですか？",
        answer: "可能です。実際に兼サーをしているメンバーも多数おります。"
      }
    ]
  }
})