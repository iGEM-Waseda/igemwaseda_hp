export const state = () => ({
  menu: {
    // name: ['iGEMとは', '合成生物学とは', 'プロジェクト', '活動内容', 'チーム', 'メンバー',  '寄付・協賛'],
    // tile: ['iGEMについて', '合成生物学について', 'プロジェクト紹介', '活動内容', 'チーム紹介',  'メンバー紹介',  '寄付・協賛のご案内'],
    // to: ['/igem', '/synbio', '/projects', '/events', '/team', '/member', '/fund']
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
    team: {
      name: "チーム",
      title: "チーム紹介",
      to: 'team'
    },
    member: {
      name: "メンバー",
      title: "メンバー",
      to: 'member'
    },
    fund: {
      name: "寄付・協賛",
      title: "寄付・協賛のご案内",
      to: 'fund'
    },
  },
})