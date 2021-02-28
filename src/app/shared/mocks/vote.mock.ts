import { Vote } from "../models/vote.model";

export const votesMock: Vote[] = [
  {
    id: '123',
    img: 'assets/img/kanye-west.jpg',
    title: 'Kanye West',
    subTitle: '1 month ago in Entretaiment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 90,
    unlike: 80
  },
  {
    id: '456',
    img: 'assets/img/mark-zuckerberg.jpg',
    title: 'Mark Zuckenberg',
    subTitle: '1 month ago in Business',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 90,
    unlike: 120
  },
  {
    id: '789',
    img: 'assets/img/cristina-fernandez.jpg',
    title: 'Cristina Fernández de Kirchner',
    subTitle: '1 month ago in Politics',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 90,
    unlike: 320
  },
  {
    id: '012',
    img: 'assets/img/malala-yousafzai.jpg',
    title: 'Malala Yousafzai',
    subTitle: '1 month ago in Entretainment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 900,
    unlike: 120
  }
];
