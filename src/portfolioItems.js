const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/optimized/${filename}`;
const originalPath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

export const tags = ['textiles', 'type', 'zines', 'prints'];

export const tagLabels = {
  textiles: 'Textiles',
  type: 'Type',
  zines: 'Zines',
  prints: 'Prints',
};

const textileItems = [
  {
    id: 'forever',
    title: 'Forever',
    summary: 'A textile piece with pixel-style lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('forever.jpg'),
      alt: 'A quilted textile hanging with the word forever repeated in blue block lettering.',
      width: 1477,
      height: 1600,
    },
    images: [],
  },
  {
    id: 'gao',
    title: 'Gao',
    summary: 'A textile wall hanging with layered fabric lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('gao.jpg'),
      alt: 'A gray and cream textile wall hanging with layered fabric Chinese lettering.',
      width: 1194,
      height: 1600,
    },
    images: [],
  },
  {
    id: 'never-better',
    title: 'Never Better',
    summary: 'A textile banner with layered lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('neverbetter.jpg'),
      alt: 'A quilted textile banner with dark blue block lettering and light blue script lettering that reads never better.',
      width: 1600,
      height: 1067,
    },
    images: [],
  },
  {
    id: 'xin-xiang-shi-cheng',
    title: 'Xin Xiang Shi Cheng',
    summary: 'A textile piece with oversized red Chinese lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('xinxiangshicheng.jpg'),
      alt: 'A red and white textile piece with oversized Chinese characters.',
      width: 1600,
      height: 1600,
    },
    images: [],
  },
  {
    id: 'shuang-xi',
    title: 'Shuang Xi',
    summary: 'A textile piece with patterned double-happiness lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('shuangxi.jpg'),
      alt: 'A red floral textile piece forming the Chinese double-happiness character.',
      width: 1600,
      height: 1600,
    },
    images: [],
  },
  {
    id: 'slow-down',
    title: 'Slow Down',
    summary: 'A textile banner with block lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('slowdown.jpg'),
      alt: 'A quilted textile banner hanging on a line with blue lettering that reads slow down and enjoy.',
      width: 1600,
      height: 1066,
    },
    images: [],
  },
  {
    id: 'j-and-a',
    title: 'J & A',
    summary: 'A quilted textile piece with custom ampersand lettering.',
    tags: ['textiles'],
    cover: {
      src: imagePath('ja.png'),
      alt: 'A quilted textile piece with large letters J and A separated by an ampersand.',
      width: 1600,
      height: 1159,
    },
    images: [],
  },
];

const typeItems = [
  {
    id: 'lark',
    title: 'Lark',
    summary: 'Custom type specimen and lettering system.',
    tags: ['type'],
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
    summary: 'Laser-cut custom lettering.',
    tags: ['type'],
    cover: {
      src: imagePath('25.jpg'),
      alt: 'Wood panel with the number 25 laser cut into it.',
      width: 1066,
      height: 1600,
    },
    images: [],
  },
];

const zineItems = [
  {
    id: 'swimming',
    title: 'Swimming',
    summary: 'Animated and still lettering study.',
    tags: ['zines'],
    cover: {
      src: imagePath('swimming.png'),
      alt: 'Lettering artwork spelling swimming in a vertical composition.',
      width: 682,
      height: 1024,
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
    ],
  },
  {
    id: 'palettes',
    title: 'Palettes',
    summary: 'Animated color and lettering exploration.',
    tags: ['zines'],
    cover: {
      src: imagePath('palettes.png'),
      alt: 'Lettering artwork with the word palettes repeated in color.',
      width: 1024,
      height: 682,
    },
    images: [
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
    ],
  },
  {
    id: 'dog-daze',
    title: 'Dog Daze',
    summary: 'Animated lettering and illustration.',
    tags: ['zines'],
    cover: {
      src: imagePath('dogdaze.png'),
      alt: 'Illustrated lettering artwork for Dog Daze.',
      width: 1024,
      height: 678,
    },
    images: [
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
];

const printItems = [
  {
    id: 'number-gestures',
    title: 'Chinese Number Gestures',
    summary: 'Risograph prints, 11 x 17 inches.',
    tags: ['prints'],
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
    tags: ['prints'],
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
    title: 'Rabbit Envelope',
    summary: 'A red envelope study with layered pattern and illustration.',
    tags: ['prints'],
    cover: {
      src: imagePath('rabbitenvelope.jpg'),
      alt: 'Red envelope artwork with a rabbit illustration and decorative patterning.',
      width: 1600,
      height: 1066,
    },
    images: [
      {
        src: imagePath('rabbitenvelope.jpg'),
        alt: 'Red envelope artwork with a rabbit illustration and decorative patterning.',
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
        src: imagePath('snakeenvelope.jpg'),
        alt: 'A pile of red envelopes printed with a gold snake illustration.',
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
    tags: ['prints'],
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
  type: typeItems,
  zines: zineItems,
  prints: printItems,
};

export const portfolioItems = tags.flatMap((tag) => portfolioItemsByTag[tag]);
