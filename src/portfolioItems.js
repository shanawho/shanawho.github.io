const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/optimized/${filename}`;
const originalPath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

export const tags = ['textiles', 'play'];

export const tagLabels = {
  textiles: 'Textiles',
  play: 'Play',
};

const textileItems = [
  {
    id: 'forever',
    title: 'How long is forever?',
    summary: 'My first quilt, a pixel typographic piece made of 1 inch squares. A blend of digital and analog creative processes, I designed the lettering in Figma and built a custom plugin to generate random degradations of the pixel type row by row.',
    year: '2024',
    tags: ['textiles'],
    cover: {
      src: imagePath('forever.jpg'),
      alt: 'A quilted textile hanging with the word forever repeated in blue block lettering.',
      width: 1477,
      height: 1600,
      dimensions: '60x64 in',
      materials: 'Cotton fabric and batting'
    },
    images: [],
  },
  {
    id: 'gao',
    title: 'Gao 杲',
    summary: 'Textile suncatcher.',
    year: '2026',
    tags: ['textiles'],
    cover: {
      src: imagePath('gao.jpg'),
      alt: 'A green and yellow textile wall hanging with french seamed fabric Chinese lettering.',
      width: 1194,
      height: 1600,
      dimensions: 'X"xX"',
      materials: 'Salvaged fabric scraps and wooden dowel'
    },
    images: [],
  },
  {
    id: 'never-better',
    title: 'Never Better',
    summary: 'A textile banner with layered lettering.',
    year: '2025',
    tags: ['textiles'],
    cover: {
      src: imagePath('neverbetter.jpg'),
      alt: 'A quilted textile banner with dark blue block lettering and light blue script lettering that reads never better.',
      width: 1600,
      height: 1067,
      dimensions: '44"x18"',
      materials: 'Cotton fabric'
    },
    images: [],
  },
  {
    id: 'xin-xiang-shi-cheng',
    title: 'May all your wishes come true, 心想事成',
    summary: 'My own personal positive propaganda. A Chinese idiom pieced together in cotton and stretched.',
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
    id: 'shuang-xi',
    title: 'Double Happiness, 双喜',
    summary: '囍 is ubiquitous with marriage in Chinese culture, taking the character for happiness and doubling it to represent good luck. I’ve always loved the symmetric symbolism of it. Here, I’ve taken offcuts from the western ceremony dress and the Chinese reception qipao I made for my own wedding, and brought them together to create 双喜。',
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
    images: [],
  },
  {
    id: 'slow-down',
    title: 'Slow Down',
    summary: 'A little reminder via pixel typography quilt',
    year: '2025',
    tags: ['textiles'],
    cover: {
      src: imagePath('slowdown.jpg'),
      alt: 'A quilted textile banner hanging on a line with blue lettering that reads slow down and enjoy.',
      width: 1600,
      height: 1066,
      dimensions: 'X"xX"',
      materials: 'Cotton fabric'
    },
    images: [],
  },
  {
    id: 'j-and-a',
    title: 'J & A',
    summary: 'NYC subway mosaic inspired lettering',
    year: '2023',
    tags: ['textiles'],
    cover: {
      src: imagePath('ja.png'),
      alt: 'A quilted textile piece with large letters J and A separated by an ampersand.',
      width: 1600,
      height: 1159,
      dimensions: 'X"xX"',
      materials: 'Cotton fabric and batting'
    },
    images: [],
  },
];

const playItems = [
  {
    id: 'lark',
    title: 'Lark typeface family',
    summary: 'A modern calligraphic typeface family with 4 weights in roman and italic. Designed as my final project while studying typeface design at Type@Cooper West, run by the Letterform Archive. Available for purchase on MyFonts',
    tags: ['play'],
    cover: {
      src: imagePath('lark.png'),
      alt: 'A wide custom type specimen image for Lark.',
      width: 1600,
      height: 800,
    },
    images: [],
  },
  {
    id: 'twenty-five',
    title: '25',
    summary: 'Custom lettering.',
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
    id: 'zines',
    title: 'Zines',
    summary: 'Small printed and animated zines, including Swimming, Palettes, and Dog Daze.',
    tags: ['play'],
    cover: {
      src: imagePath('swimming.png'),
      alt: 'Lettering artwork spelling swimming in a vertical composition.',
      width: 682,
      height: 1024,
      materials: 'Risograph on paper'
    },
    images: [
      {
        src: imagePath('swimming.png'),
        alt: 'Lettering artwork spelling swimming in a vertical composition.',
        width: 682,
        height: 1024,
      },
      {
        src: originalPath('swimming.gif'),
        alt: 'Animated lettering artwork spelling swimming.',
        width: 682,
        height: 1024,
      },
      {
        src: imagePath('palettes.png'),
        alt: 'Lettering artwork with the word palettes repeated in color.',
        width: 1024,
        height: 682,
      },
      {
        src: originalPath('palettes.gif'),
        alt: 'Animated color palette lettering artwork.',
        width: 1024,
        height: 682,
      },
      {
        src: imagePath('dogdaze.png'),
        alt: 'Illustrated lettering artwork for Dog Daze.',
        width: 1024,
        height: 678,
      },
      {
        src: originalPath('dogdaze.gif'),
        alt: 'Animated illustrated lettering artwork for Dog Daze.',
        width: 1024,
        height: 678,
      },
    ],
  },
  {
    id: 'number-gestures',
    title: 'Chinese Number Gestures',
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
        src: imagePath('gestures2.jpg'),
        alt: 'Second print showing Chinese number gestures.',
        width: 1133,
        height: 1600,
      },
    ],
  },
  {
    id: 'notes-to-self',
    title: 'Notes to Self',
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
    id: 'rabbit-envelope',
    title: 'Red Envelopes',
    summary: 'Every year I design a red envelope with the zodiac for the lunar new year as a way of giving holiday cards to friends and family.',
    year: '2023',
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
        alt: 'A pile of red envelopes printed with a chinese lettering on it.',
        width: 1600,
        height: 1066,
      },
    ],
  },
  {
    id: 'holiday-card',
    title: 'Holiday Card',
    summary: 'Pen-plotted custom lettering.',
    year: '2021',
    tags: ['play'],
    cover: {
      src: imagePath('holiday.jpg'),
      alt: 'A card with illustrative lettering that reads Hope you have a cozy and relaxing holiday.',
      width: 1118,
      height: 1118,
    },
    images: [],
  },
];

export const portfolioItemsByTag = {
  textiles: textileItems,
  play: playItems,
};

export const portfolioItems = tags.flatMap((tag) => portfolioItemsByTag[tag]);
