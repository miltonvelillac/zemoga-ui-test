import { Vote } from "../models/vote.model";

export const votesMock: Vote[] = [
  {
    img: 'assets/img/kanye-west.jpg',
    title: 'Kanye West',
    subTitle: '1 month ago in Entretaiment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 90,
    unlike: 80
  },
  {
    img: 'assets/img/mark-zuckerberg.jpg',
    title: 'Mark Zuckenberg',
    subTitle: '1 month ago in Business',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    like: 90,
    unlike: 120
  }
];
