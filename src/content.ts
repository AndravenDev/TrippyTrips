export type SceneKey = 'lake' | 'pines' | 'vista' | 'canyon' | 'campfire';

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
  distance: string;
  time?: string;
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
  photos: Array<{ sceneKey: SceneKey; caption: string }>;
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
  footer: FooterContent;
}

export const tripContent: TripContent = {
  nav: {
    brand: 'Trippy Trips',
    links: [
      { label: 'Пътешествието', href: '#trip' },
      { label: 'Маршрут', href: '#days' },
      { label: 'Галерия', href: '#gallery' },
    ],
  },

  hero: {
    eyebrow: 'Пътешествие №1 · Юли 2026 · 1 ден',
    titleLine1: 'Бъзлуджа',
    titleLine2Accent: 'road trip',
    titleLine2Suffix: '.',
    description:
      'Един ден, четири спирки, безкрайно количество история и смях. От Габрово до Бузлуджа и обратно — с добра компания и лоши вицове.',
    cta: 'Виж плана',
    stats: [
      { value: '4', label: 'Спирки' },
      { value: '1', label: 'Ден' },
      { value: '2', label: 'Музея' },
      { value: '∞', label: 'Спомени' },
    ],
    marquee: [
      { text: '★ БУЗЛУДЖА ПАМЕТНИК' },
      { text: '· Габровски хумор ·', highlighted: true },
      { text: '★ ПЛАНИНСКА ПЪТЕКА' },
      { text: '· история и ирония ·', highlighted: true },
      { text: '★ БАЛКАНСКИ ВАЙБ' },
      { text: '· старо и ново ·', highlighted: true },
    ],
  },

  why: {
    eyebrow: '· Защо точно тука',
    heading: 'История, смях и бетон.',
    description:
      'Балканите крият паметници, музеи и хора, за които никой не говори достатъчно. Бузлуджа е един от тях — монументален, странен и незабравим.',
    cards: [
      {
        emoji: '🏛️',
        title: 'История в бетон',
        body: 'Бузлуджа е едно от най-мистериозните паметници в Европа. Трябва да се види лично.',
      },
      {
        emoji: '😂',
        title: 'Смях и ирония',
        body: 'Габрово е световна столица на хумора. Очаквайте неочаквано — и много лоши вицове.',
      },
      {
        emoji: '⚙️',
        title: 'Индустриален шик',
        body: 'Фабрики, машини и носталгия от друга епоха — историята на труда е по-интересна отколкото звучи.',
      },
      {
        emoji: '🚗',
        title: 'Близо до дома',
        body: 'Без трансконтинентален полет. Просто качи се в колата и шофирай 2 часа.',
      },
    ],
  },

  days: {
    eyebrow: '· Спирка по спирка',
    headingNormal: 'Четири спирки.',
    headingAccent: 'Нула скуки.',
    description:
      'Планът е готов, но планираме отклонения. Имаш идея за допълнителна спирка? Гласуваме демократично — вика се печели.',
    items: [
      {
        label: 'Спирка 1',
        title: 'Габрово',
        subtitle: 'Началото на пътя',
        body: 'Сбирка, кафе и първи снимки пред Стария мост. Габрово е малко, но оживено — задължителна разходка преди да тръгваме нагоре по планината.',
        distance: '0 km · старт',
        time: '09:00',
        tags: ['Стар град', 'Кафе пауза'],
        sceneKey: 'pines',
        accent: 'var(--accent)',
      },
      {
        label: 'Спирка 2',
        title: 'Бузлуджа',
        subtitle: 'Паметникът',
        body: 'Извисяващ се над облаците, Бузлуджа е като нещо от друга планета. Разходка около него, снимки и малко здравословен екзистенциален ужас.',
        distance: '30 km · 45 мин',
        time: '11:00',
        tags: ['Паметник', 'Планински изглед'],
        sceneKey: 'vista',
        accent: 'var(--accent-3)',
      },
      {
        label: 'Спирка 3',
        title: 'Музей на индустрията',
        subtitle: 'Фабричен дух',
        body: 'Огромен, странно завладяващ и непознат за повечето. Историята на Габровската индустрия разказана с реални машини и парче гордост.',
        distance: '32 km · 50 мин',
        time: '14:00',
        tags: ['Музей', 'История'],
        sceneKey: 'canyon',
        accent: 'var(--accent-4)',
      },
      {
        label: 'Спирка 4',
        title: 'Музей на хумора и сатирата',
        subtitle: 'Смях гарантиран',
        body: 'Единственият по рода си в света. Постоянни и временни изложби, малко абсурд и много смях. Перфектен финал за деня.',
        distance: '33 km · 52 мин',
        time: '16:30',
        tags: ['Музей', 'Хумор'],
        sceneKey: 'campfire',
        accent: 'var(--accent-2)',
      },
    ],
  },

  gallery: {
    eyebrow: '· Предишни пътешествия',
    heading: 'Снимки от пътя.',
    subtitle: '↳ Балкански приключения, 2025. Камери, смях и много спирки.',
    photos: [
      { sceneKey: 'vista', caption: 'бузлуджа / изгрев' },
      { sceneKey: 'pines', caption: 'гората около Габрово' },
      { sceneKey: 'campfire', caption: 'края на деня' },
      { sceneKey: 'canyon', caption: 'музей на индустрията' },
      { sceneKey: 'lake', caption: 'спокойна спирка' },
    ],
  },

  footer: {
    brand: 'Trippy Trips',
    tagline: 'пътувания за хронични мислители',
    copyright: '© 2026 · направено с твърде много кафе',
  },
};
