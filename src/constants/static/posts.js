import formatedDate from 'helpers/dateHelper';

export const posts = [
  {
    id: 1,
    like: 20,
    dislike: 0,
    title: 'Пост #1',
    body: 'hello world',
    image: {
      src: 'https://instagram.fhrk1-1.fna.fbcdn.net/t51.2885-15/e35/21479794_123830621607748_4363161708689096704_n.jpg',
      height: '230',
      width: '150',
      alt: 'qwerty'
    },
    meta: {
      author: 'dpro',
      createdAt: formatedDate('31-10-2017 11:11:11'),
      updatedAt: formatedDate('01-11-2017 11:11:11'),
    }
  },
  {
    id: 2,
    like: 15,
    dislike: 30,
  },
  {
    id: 3,
    like: 15,
    dislike: 30,
    image: {
      src:
'https://instagram.fhrk1-1.fna.fbcdn.net/t51.2885-15/s1080x1080/e35/15624348_580636935463402_6884876358384615424_n.jpg'
    },
  },
  {
    id: 4,
    like: 20,
    dislike: 1,
    title: 'Пост #3',
    body: 'hello world',
    image: {
      src: 'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
      height: '230',
      width: '150',
      alt: 'qwerty'
    },
    meta: {
      author: 'dpro',
      createdAt: formatedDate('03-10-2017 11:11:11'),
      updatedAt: formatedDate('04-10-2017 11:11:11'),
    }
  }
];
