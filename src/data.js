import room1 from '../src/images/pres-suite2.jpeg';
import room2 from '../src/images/details-2.jpg';
import room3 from '../src/images/detail-3.jpg';
import room4 from '../src/images/details-4.jpg';
import img2 from '../src/images/room-2.jpg';
import img4 from '../src/images/room-5.jpg';
import img6 from '../src/images/room-6.jpeg';
import img7 from '../src/images/room-4.jpg';
import img8 from '../src/images/room-8.jpg';
import img10 from '../src/images/room-10.jpg.webp';
import img11 from '../src/images/room-11.jpg';
import img12 from '../src/images/room-12.jpeg.webp';

const data = [
  {
    sys: {
      id: '2',
    },
    fields: {
      name: 'single basic',
      slug: 'single-basic',
      type: 'single',
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '4',
    },
    fields: {
      name: 'single deluxe',
      slug: 'single-deluxe',
      type: 'single',
      price: 235,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '6',
    },
    fields: {
      name: 'double basic',
      slug: 'double-basic',
      type: 'double',
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '7',
    },
    fields: {
      name: 'double standard',
      slug: 'double-standard',
      type: 'double',
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '8',
    },
    fields: {
      name: 'double deluxe',
      slug: 'double-deluxe',
      type: 'double',
      price: 375,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '10',
    },
    fields: {
      name: 'family basic',
      slug: 'family-basic',
      type: 'family',
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '11',
    },
    fields: {
      name: 'family standard',
      slug: 'family-standard',
      type: 'family',
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '12',
    },
    fields: {
      name: 'family deluxe',
      slug: 'family-deluxe',
      type: 'family',
      price: 475,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '13',
    },
    fields: {
      name: 'presidential',
      slug: 'presidential-room',
      type: 'presidential',
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur corrupti architecto saepe exercitationem nobis ab?',
      extras: [
        'Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds',
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];

export default data;
