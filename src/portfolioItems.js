const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/optimized/${filename}`;
const originalPath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

export const tags = ['textiles', 'typeface', 'play'];

export const tagLabels = {
  textiles: 'Textiles',
  play: 'Play',
  typeface: 'Type',
};

const textileItems = [
  {
    id: 'forever',
    title: 'How long is forever?',
    accentColor: '#1a3870',
    summary: 'I used a blend of digital and analog creative processes to conceptualize and create this pixel typographic textile. I designed the lettering in Figma and coded a custom plugin to generate random degradations of the pixel type row by row. Sewing together the over 40,000 1-inch squares to complete the front did indeed take forever.',
    year: '2024',
    tags: ['textiles'],
    cover: {
      src: imagePath('forever.jpg'),
      alt: 'A quilted textile hanging with the word forever repeated in blue block lettering.',
      width: 1477,
      height: 1600,
      dimensions: '60"x64"',
      materials: 'Cotton fabric and batting'
    },
    images: [
      {
        src: imagePath('forever.jpg'),
        alt: 'A quilted textile hanging with the word forever repeated in blue block lettering.',
        width: 1477,
        height: 1600,
      },
      {
        src: originalPath('forever2.JPG'),
        alt: 'Detail view of the How long is forever quilted textile.',
        width: 3120,
        height: 2080,
      },
      {
        src: originalPath('forever3.JPG'),
        alt: 'Close detail of the How long is forever quilted textile.',
        width: 3120,
        height: 2080,
      },
    ],
  },
  {
    id: 'shine',
    title: 'Shine 杲',
    accentColor: '#a58e50',
    summary: 'Textile suncatcher, feature a hanzi character from a friend\'s name, meaning "to shine"',
    year: '2026',
    tags: ['textiles'],
    cover: {
      src: imagePath('gao.jpg'),
      alt: 'A green and yellow textile wall hanging with french seamed fabric Chinese lettering.',
      width: 1194,
      height: 1600,
      dimensions: '10.5"x16"',
      materials: 'Salvaged fabric scraps and wooden dowel'
    },
    images: [
      {
        src: imagePath('gao.jpg'),
        alt: 'A green and yellow textile wall hanging with french seamed fabric Chinese lettering.',
        width: 1194,
        height: 1600,
      },
      {
        src: originalPath('gou-light.jpg'),
        alt: 'The Shine textile suncatcher hanging on a wall in sunlight.',
        width: 1152,
        height: 1510,
      },
      {
        src: imagePath('gou-poster.png'),
        animatedSrc: originalPath('gou.gif'),
        autoPlay: true,
        alt: 'Animated view of the Shine textile suncatcher moving in the light.',
        width: 1080,
        height: 1920,
      },
    ],
  },
  {
    id: 'never-better',
    title: 'Never Better',
    accentColor: '#082a81',
    summary: 'Textile banner with pieced and appliqued lettering.',
    year: '2025',
    tags: ['textiles'],
    cover: {
      src: imagePath('better1.jpg'),
      alt: 'A quilted textile banner with dark blue block lettering and light blue script lettering that reads never better.',
      width: 2960,
      height: 1973,
      dimensions: '44"x18"',
      materials: 'Cotton fabric'
    },
    images: [
      {
        src: originalPath('better1.jpg'),
        alt: 'A quilted textile banner with dark blue block lettering and light blue script lettering that reads never better.',
        width: 2960,
        height: 1973,
      },
      {
        src: originalPath('better2.jpg'),
        alt: 'A second view of the Never Better textile banner.',
        width: 2650,
        height: 1767,
      },
    ],
  },
  {
    id: 'wishes',
    title: 'May all your wishes come true',
    accentColor: '#e5101b',
    summary: 'My own personal positive propaganda. This Chinese idiom 心想事成 is pieced together in cotton and stretched on frame.',
    year: '2026',
    tags: ['textiles'],
    cover: {
      src: imagePath('xinxiangshicheng.jpg'),
      alt: 'A red and white textile piece with oversized Chinese characters.',
      width: 1600,
      height: 1600,
      dimensions: '48"x48"',
      materials: 'Cotton fabric'
    },
    images: [],
  },
  {
    id: 'double-happiness',
    title: 'Double Happiness ',
    accentColor: '#9c262b',
    summary: '双喜 or 囍 is ubiquitous with marriage in Chinese culture, taking the character for happiness and doubling it to represent good luck. I’ve always loved the symmetric symbolism of it. For this piece I used offcuts from the western ceremony dress and Chinese reception qipao I sewed for my own wedding, and brought them together to create 囍。',
    year: '2024',
    tags: ['textiles'],
    cover: {
      src: imagePath('shuangxi.jpg'),
      alt: 'A red floral textile piece forming the Chinese double-happiness character.',
      width: 1600,
      height: 1600,
      dimensions: '15.5"x15.5"',
      materials: 'Silk organza and jacquard brocade scraps of my wedding dresses'
    },
    images: [
      {
        src: originalPath('shuangxi.jpg'),
        alt: 'A red floral textile piece forming the Chinese double-happiness character.',
        width: 2203,
        height: 2203,
      },
      {
        src: originalPath('xi3.jpg'),
        alt: 'The Double Happiness textile photographed on a white background.',
        width: 2847,
        height: 2847,
      },
      {
        src: originalPath('xi2.png'),
        alt: 'The Double Happiness textile framed and lit by sunlight.',
        width: 3024,
        height: 4032,
      },
    ],
  },
  {
    id: 'slow-down',
    title: 'Slow Down',
    accentColor: '#082e81',
    summary: 'A little reminder via pixel typography quilt',
    year: '2025',
    tags: ['textiles'],
    cover: {
      src: imagePath('slow.png'),
      alt: 'A quilted textile banner on a wood floor with blue lettering that reads slow down and enjoy.',
      width: 1600,
      height: 755,
      dimensions: '47"x19"',
      materials: 'Cotton fabric'
    },
    images: [
      {
        src: originalPath('slow.png'),
        alt: 'A quilted textile banner on a wood floor with blue lettering that reads slow down and enjoy.',
        width: 4024,
        height: 1900,
      },
    ],
  },
  {
    id: 'j-and-a',
    title: 'Subway type',
    accentColor: '#a53623',
    summary: 'A little gift for friends, and my first typographic textile. The lettering is inspired by NYC subway mosaics, which I always love admiring when I visit',
    year: '2023',
    tags: ['textiles'],
    cover: {
      src: imagePath('ja.png'),
      alt: 'A quilted textile piece with large letters J and A separated by an ampersand.',
      width: 1600,
      height: 1168,
      materials: 'Cotton fabric and batting'
    },
    images: [
      {
        src: originalPath('ja.png'),
        alt: 'A quilted textile piece with large letters J and A separated by an ampersand.',
        width: 3024,
        height: 2209,
      },
    ],
  },
];

const typefaceItems = [
  {
    id: 'lark',
    title: 'Lark typeface family',
    accentColor: '#0f80c2',
    summary: 'Lark is a modern calligraphic typeface family with 4 weights in roman and italic. Designed as my final project while studying typeface design at Type@Cooper West run by the Letterform Archive in 2018, Lark is available for purchase on My Fonts.',
    summaryLinks: [
      {
        text: 'My Fonts',
        href: 'https://www.myfonts.com/collections/lark-font-shana-hu/',
      },
    ],
    tags: ['typeface'],
    cover: {
      src: imagePath('lark.png'),
      alt: 'A wide custom type specimen image for Lark.',
      width: 1600,
      height: 800,
    },
    images: [],
  },
];

const playItems = [
  {
    id: 'twenty-five',
    title: '25',
    accentColor: '#c14c34',
    summary: 'Custom lettering designed for my 25th birthday and lasercut into a shadowbox silhouette',
    tags: ['play'],
    cover: {
      src: imagePath('25.jpg'),
      alt: 'Wood panel with the number 25 laser cut into it.',
      width: 1066,
      height: 1600,
      materials: 'Wood panel'
    },
    images: [],
  },
  {
    id: 'notes-to-self',
    title: 'Notes to Self',
    accentColor: '#773f82',
    summary: 'Pen-plotted custom lettering on Post-its.',
    tags: ['play'],
    cover: {
      src: imagePath('notes.jpg'),
      alt: "Three Post-its that read You'll figure it out, What's the worst that could happen, and Make it happen.",
      width: 1089,
      height: 1089,
    },
    images: [],
  },
  {
    id: 'zines',
    title: 'Zines',
    accentColor: '#bc8639',
    summary: "Sometimes, I make zines, which are small-batch self-published booklets. They're a fun way to explore a theme in a scrappy way. Many of mine are printed using risography (a kind of digital duplicator) and hand bound. In the past, I've tabled at SF Zine Fest with friends under the banner Hotcake Collective",
    summaryLinks: [
      {
        text: 'Hotcake Collective',
        href: 'https://www.instagram.com/hotcakecollective/',
      },
    ],
    tags: ['play'],
    cover: {
      src: imagePath('swimming.png'),
      alt: 'Risographed zine about what it feels like to go swimming',
      width: 682,
      height: 1024,
    },
    images: [
      {
        src: imagePath('swimming-poster.png'),
        animatedSrc: originalPath('swimming.gif'),
        alt: 'Risographed zine about what it feels like to go swimming',
        width: 682,
        height: 1024,
      },
      {
        src: imagePath('palettes-poster.png'),
        animatedSrc: originalPath('palettes.gif'),
        alt: 'Animated color palette zine inspired by San Francisco',
        width: 1024,
        height: 682,
      },
      {
        src: imagePath('dogdaze-poster.png'),
        animatedSrc: originalPath('dogdaze.gif'),
        alt: 'Dog Daze zine',
        width: 1024,
        height: 678,
      },
      {
        src: originalPath('rituals.jpg'),
        alt: 'Illustrated Rituals zine on green checked fabric.',
        width: 4898,
        height: 3265,
      },
      {
        src: originalPath('burnout.png'),
        alt: 'A spiral-bound zine page that reads B is for Burnout with an illustration of a person at a laptop.',
        width: 3024,
        height: 3037,
      },
    ],
  },
  {
    id: 'red-envelope',
    title: 'Red Envelopes',
    accentColor: '#b0454a',
    summary: 'Every year I design a red envelope with the zodiac for the lunar new year as a way of giving holiday cards to friends and family. Each envelope, or hongbao, is pen-plotted with gold paint markers',
    year: '2021–ongoing',
    tags: ['play'],
    cover: {
      src: imagePath('snakeenvelope.jpg'),
      alt: 'A pile of red envelopes printed with a gold snake illustration.',
      width: 1600,
      height: 1066,
    },
    images: [
      {
        src: imagePath('snakeenvelope.jpg'),
        alt: 'A pile of red envelopes printed with a gold snake illustration.',
        width: 1600,
        height: 1066,
      },
      {
        src: imagePath('tigerenvelope.jpg'),
        alt: 'Red envelopes printed with a gold tiger illustration.',
        width: 1600,
        height: 1066,
      },
      {
        src: imagePath('horseenvelope.jpg'),
        alt: 'A pile of red envelopes printed with a gold horse illustration.',
        width: 1600,
        height: 1066,
      },
      {
        src: imagePath('rabbitenvelope.jpg'),
        alt: 'Red envelope artwork with a rabbit illustration and decorative patterning.',
        width: 1600,
        height: 1066,
      },
      {
        src: imagePath('hongbao.jpg'),
        alt: 'A pile of red envelopes printed with a chinese lettering on it wishing you good fortune.',
        width: 1600,
        height: 1066,
      },
    ],
  },
  {
    id: 'azizam-merch',
    title: 'Azizam merch',
    accentColor: '#9f4b69',
    summary: 'Illustrations for custom Baggu and hat for Azizam LA showing their logotype in Farsi being piped onto a Napoleon cake.',
    summaryLinks: [
      {
        text: 'Azizam LA',
        href: 'https://www.azizamla.com/',
      },
    ],
    year: '2025',
    tags: ['play'],
    cover: {
      src: imagePath('azizam-baggu.png'),
      alt: 'A pink Baggu bag with Azizam LA illustrations hanging outdoors.',
      width: 1200,
      height: 1600,
    },
    images: [
      {
        src: originalPath('azizam-baggu.png'),
        alt: 'A pink Baggu bag with Azizam LA illustrations hanging outdoors.',
        width: 3024,
        height: 4032,
      },
      {
        src: originalPath('azizam-hat.png'),
        alt: 'A blue Azizam hat with embroidered lettering.',
        width: 3024,
        height: 4032,
      },
    ],
  },
  {
    id: 'number-gestures',
    title: 'Chinese Number Gestures',
    accentColor: '#b93c66',
    summary: 'Chinese hand gestures for numbers 10 and under',
    tags: ['play'],
    dimensions: '11"x17"',
    materials: 'Risograph on paper',
    cover: {
      src: imagePath('numbergestures.jpg'),
      alt: 'Risograph print showing Chinese number gestures.',
      width: 1094,
      height: 1600,
    },
    images: [
      {
        src: imagePath('numbergestures.jpg'),
        alt: 'Risograph print showing Chinese number gestures.',
        width: 1094,
        height: 1600,
      },
      {
        src: originalPath('numbergestures-zine.jpg'),
        alt: 'Zine showing Chinese number gestures.',
      },
    ],
  },
];

export const portfolioItemsByTag = {
  textiles: textileItems,
  play: playItems,
  typeface: typefaceItems,
};

export const portfolioItems = tags.flatMap((tag) => portfolioItemsByTag[tag]);
