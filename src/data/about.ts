export type AboutLocale = "ja" | "en";

export const aboutHero = {
  avatarSrc: "/GraphiumIcon.png",
  name: "Graphium",
  socialLinks: [
    { href: "https://x.com/graphium142857", ariaLabel: "X", iconSrc: "/icons/x.svg" },
    { href: "https://github.com/Graphium314", ariaLabel: "GitHub", iconSrc: "/icons/github.svg" },
    { href: "https://misskey.io/@graphium142857", ariaLabel: "Misskey", iconSrc: "/icons/misskey_io.svg" },
    { href: "https://graphium314.hatenablog.com", ariaLabel: "はてなブログ", iconSrc: "/icons/hatenablog.svg" },
  ],
  atcoder: {
    username: "Graphium314",
    badgeUrl:
      "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FGraphium314",
  },
} as const;

export const aboutContent = {
  ja: {
    avatarAlt: "Graphiumのアバター",
    atcoderBadgeAlt: `AtCoder ${aboutHero.atcoder.username}のバッジ`,
    affiliation: [
      "東京大学大学院 情報理工学系研究科 数理情報学専攻 修士課程",
      "東京大学アマチュア無線クラブ",
    ],
    historyTitle: "経歴",
    history: [
      {
        period: "2026年4月-現在",
        detail: "東京大学 情報理工学系研究科 数理情報学専攻",
      },
      {
        period: "2024年4月-2026年3月",
        detail: "東京大学 工学部 計数工学科 数理情報工学コース",
      },
      {
        period: "2022年4月-2024年3月",
        detail: "東京大学 理科一類",
      },
      {
        period: "-2022年3月",
        detail: "長崎県立佐世保北高等学校",
      },
    ],
    cards: [
      {
        title: "コールサイン",
        items: ["JF6CDE", "AK6RG"],
      },
      {
        title: "資格",
        items: [
          "応用情報技術者",
          "第一級アマチュア無線技士",
          "第一級陸上無線技術士",
          "FCC Amateur Extra",
          "潜水士",
          "小型船舶操縦免許 1級",
        ],
      },
    ],
  },
    en: {
    avatarAlt: "Graphium's avatar",
    atcoderBadgeAlt: `AtCoder badge for ${aboutHero.atcoder.username}`,
    affiliation: [
      "Master's Program, Department of Mathematical Informatics, Graduate School of Information Science and Technology, The University of Tokyo",
      "The University of Tokyo Amateur Radio Club",
    ],
    historyTitle: "Education",
    history: [
      {
        period: "Apr. 2026 - Present",
        detail:
          "Master's Program, Department of Mathematical Informatics, Graduate School of Information Science and Technology, The University of Tokyo",
      },
      {
        period: "Apr. 2024 - Mar. 2026",
        detail:
          "Mathematical Information Engineering Course, Department of Mathematical Engineering and Information Physics, Faculty of Engineering, The University of Tokyo",
      },
      {
        period: "Apr. 2022 - Mar. 2024",
        detail:
          "Natural Sciences I, College of Arts and Sciences, The University of Tokyo",
      },
      {
        period: "- Mar. 2022",
        detail: "Sasebo Kita High School (Nagasaki Prefecture)",
      },
    ],
    cards: [
      {
        title: "Call Signs",
        items: ["JF6CDE", "AK6RG"],
      },
      {
        title: "Qualifications",
        items: [
          "Applied Information Technology Engineer Examination (AP)",
          "Amateur First-Class Radio Operator",
          "First-Class Technical Radio Operator for On-The-Ground Services",
          "FCC Amateur Extra",
          "Diver (Japan)",
          "First class boat's operator (Japan)",
        ],
      },
    ],
  },
} as const satisfies Record<
  AboutLocale,
  {
    avatarAlt: string;
    atcoderBadgeAlt: string;
    affiliation: readonly string[];
    historyTitle: string;
    history: readonly { period: string; detail: string }[];
    cards: readonly { title: string; items: readonly string[] }[];
  }
>;
