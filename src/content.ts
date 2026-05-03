export type SceneKey = "lake" | "pines" | "vista" | "canyon" | "campfire";

export interface NavContent {
  brand: string;
  links: Array<{ label: string; href: string }>;
}

export interface HeroContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2Accent: string;
  titleLine2Suffix: string;
  description: string;
  cta: string;
  stats: Array<{ value: string; label: string }>;
  marquee: Array<{ text: string; highlighted?: boolean }>;
}

export interface WhyContent {
  eyebrow: string;
  heading: string;
  description: string;
  cards: Array<{ emoji: string; title: string; body: string }>;
}

export interface DayItem {
  label: string;
  title: string;
  subtitle: string;
  body: string;
  distance?: string;
  time?: string;
  image?: string;
  tags: string[];
  sceneKey: SceneKey;
  accent: string;
}

export interface DaysContent {
  eyebrow: string;
  headingNormal: string;
  headingAccent: string;
  description: string;
  items: DayItem[];
}

export interface GalleryContent {
  eyebrow: string;
  heading: string;
  subtitle: string;
  photos: Array<{ sceneKey?: SceneKey; image?: string; caption: string }>;
}

export interface RsvpContent {
  eyebrow: string;
  heading: string;
  description: string;
  buttonYes: string;
  buttonNo: string;
  modalTitle: string;
  modalPlaceholder: string;
  modalSubmit: string;
  successMessage: string;
}

export interface FooterContent {
  brand: string;
  tagline: string;
  copyright: string;
}

export interface TripContent {
  nav: NavContent;
  hero: HeroContent;
  why: WhyContent;
  days: DaysContent;
  gallery: GalleryContent;
  rsvp: RsvpContent;
  footer: FooterContent;
}

export const tripContent: TripContent = {
  nav: {
    brand: "Trippy Trips",
    links: [
      { label: "Пътешествието", href: "#trip" },
      { label: "Маршрут", href: "#days" },
      { label: "Галерия", href: "#gallery" },
    ],
  },

  hero: {
    eyebrow: "Пътуване до Бузлуджа",
    titleLine1: "Бузлуджа",
    titleLine2Accent: "road trip",
    titleLine2Suffix: "!",
    description:
      "Домът на паметника на Българската комунистическа партия е емблематично място, което ще даде старта на сезона на пътуванията през 2026!",
    cta: "Виж плана",
    stats: [
      { value: "3", label: "Дестинации" },
      { value: "3", label: "Дни" },
      { value: "∞", label: "Спомени" },
    ],
    marquee: [
      { text: "★ ПАМЕТНИКА БУЗЛУДЖА" },
      { text: "· РОДНИЯ ГРАД НА КРИСКО ·", highlighted: true },
      { text: "★ МУЗЕЙ НА ИНДУСТРИЯТА" },
      { text: "· БЕЗ ПРЕХОДИ! ·", highlighted: true },
      { text: "★ БАЛКАНСКИ ВАЙБ" },
      { text: "· МУЗЕЙ НА ХУМОРА И САТИРАТА ·", highlighted: true },
      { text: "· ПЕЩЕРА БАЧО КИРО ·" },
    ],
  },

  why: {
    eyebrow: "· Защо точно тука",
    heading: "История, смях и бетон и пещери",
    description:
      "Районът около Габрово е място, където може да се видят доста неща. От гори и пещери, през внушителния паметник Бузлуджа до многобройните музеи в самия град.",
    cards: [
      {
        emoji: "🏛️",
        title: "История в бетон",
        body: "Бузлуджа е един от най-мистериозните паметници в Европа. Трябва да се види лично.",
      },
      {
        emoji: "😂",
        title: "Смях и ирония",
        body: "Габрово е световна столица на хумора. Очаквайте неочаквано — и много лоши вицове.",
      },
      {
        emoji: "⚙️",
        title: "Индустриален шик",
        body: "Фабрики, машини и носталгия от друга епоха — историята на труда е по-интересна отколкото звучи.",
      },
      {
        emoji: "🚗",
        title: "Близо до дома",
        body: "Без трансконтинентален полет. Просто качи се в колата и шофирай 2 часа.",
      },
    ],
  },

  days: {
    eyebrow: "· СТЪПКА ПО СТЪПКА",
    headingNormal: "Три дни, три дестинации, ",
    headingAccent: "без преходи!",
    description:
      "Идеята е да си вземем петък отпуска и да тръгнем към Габрово на 22.05, да нощуваме две вечери там и да се приберем в неделя, за да може в понеделник да сме се прибрали и да си починем преди да започне работната седмица.",
    items: [
      {
        label: "Дестинация 1",
        title: "Габрово",
        subtitle: "Началото",
        body: "Пътят до Габрово е малко над три часа, предполагам че ще пристигнем там по обяд. Програмата за първия ден ще е лека и лежерна, понеже най-вероятно ще сме малко изморени от пътя. Ще намеря някоя спокойна вила, където да се настаним и да редим ракии и салати. След настаняването може да посетим някои от многото музеи в Габрово, като например интерактивния музей на индустрията или музея на хумора и сатирата!",
        time: "22.05.2026",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/TownHall_Gabrovo.jpg",
        tags: ["Настаняване", "Разходка", "Пазаруване", "Музеи"],
        sceneKey: "pines",
        accent: "var(--accent-2)",
      },
      {
        label: "Дестинация 2",
        title: "Бузлуджа",
        subtitle: "Паметникът",
        body: "Внушителният символ на българския комунизъм Бузлуджа ще бъде втората ни дестинация от пътуването! Зависи къде точно ще отседнем, но грубо пътят от Габрово до Бузлуджа е един час с кола. Няма нужда от преход пеша, пътят стига точно до паметника. Това е единственото мероприятие предвидено за този ден, понеже целта е програмата да е спокойна и лежерна, но винаги можем да добавим още дестинации, като например язовир Христо Смирненски.",
        time: "23.05.2026",
        image:
          "https://stroiinfo.com/wp-content/uploads/2020/04/%D0%9F%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D0%BA%D0%BD%D0%B0%D0%91%D1%83%D0%B7%D0%BB%D1%83%D0%B4%D0%B6%D0%B0_a3429bff1fc97fbba659184eca9160bf.jpg",
        tags: ["Паметник", "Планински изглед", "Съветски Брутализъм"],
        sceneKey: "vista",
        accent: "var(--accent-2)",
      },
      {
        label: "Дестинация 3",
        title: "Пещера Бачо Киро",
        subtitle: "На финал",
        body: "Пещерата Бачо Киро е само на 15 минути на изток от центъра на Габрово. Това я прави идеалната последна спирка от нашето пътуване, преди да се отправим към Варна Майка и даже ни е по път!",
        time: "24.05.2026",
        image:
          "https://rezervaciq.com/img/objects/sights_35_849662930a_1236331709_DSC_5595_1.jpg",
        tags: ["Пещера", "Сталактити", "Сталагмити"],
        sceneKey: "canyon",
        accent: "var(--accent-2)",
      },
    ],
  },

  gallery: {
    eyebrow: "· Спомени от преди",
    heading: "Ето някои стари спомени, които да ви вдъхновят да създадете нови",
    subtitle: "↳ Палатки, преходи, празненства! Това не е само миналото, направи го настояще!",
    photos: [
      { image: "/20220906_164034.jpg", caption: "Flexin -  06.09.2022" },
      { image: "/1759178041531.jpeg", caption: "Conquerors - септември 2025" },
      { image: "/IMG_20251231_210526.jpg", caption: "Нова година 2026" },
      { image: "/IMG_20250302_005559.jpg", caption: "Drip - февруари 2025" },
      { image: "/IMG_20250621_122204.jpg", caption: "Cherry on top - 21.06.2025" },
      { image: "/1759178043430.jpg", caption: "Top of the world - септември 2025" },
    ],
  },

  rsvp: {
    eyebrow: '· Кратък roadtrip за 3 дни, с интересни места, без натоварване!',
    heading: 'Зарибен ли си батенце?',
    description: '22.05 - 24.05',
    buttonYes: 'Да, бе! 🔥',
    buttonNo: 'Не знам още...',
    modalTitle: 'Кой беше ти?',
    modalPlaceholder: 'Твоето име',
    modalSubmit: 'Вътре съм!',
    successMessage: 'Добавен си! Ще се видим на пътя 🎉',
  },

  footer: {
    brand: "Trippy Trips",
    tagline: "пътувания за наркомани",
    copyright: "© 2026 · Mexano Solutions",
  },
};
