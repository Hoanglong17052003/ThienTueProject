export const Questions = [
  {
    id: 1,
    name: 'Câu hỏi',
    image: require('../../assets/icons/question-list-icon.png'),
    categories: [
      {
        index: 1,
        name: 'Miễn phí',
        infosFree: [
          {
            num: 1,
            title:
              'Thích cô ấy tối đã ngõ lời nhưng cô ấy kêu cần thời gian suy nghĩ. Tôi còn cơ hội không? ',
            timeActive: '27 phút trước',
            comment: '2',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
          {
            num: 2,
            title: 'Không biết là tính cách của bạn như nào vậy ạ',
            timeActive: '2 giờ trước',
            comment: '1',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
          {
            num: 3,
            title: 'Tôi có khả năng trung trúng Vietlott ko',
            timeActive: '2 giờ trước',
            comment: '1',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
        ],
      },
      {
        index: 2,
        name: 'Có phí',
        infosCharge: [
          {
            num: 1,
            title: 'Bọn mình có thành đôi trong tương lai không ạ',
            timeActive: '3 ngày trước',
            comment: '14',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
          {
            num: 2,
            title: 'Sắp tới tình cảm sẽ ra sao ? có dừng lại đc mqh này ko?ko',
            timeActive: '4 ngày trước',
            comment: '7',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
          {
            num: 3,
            title: 'Liệu trong năm này mình có bay sang Hàn được không?',
            timeActive: '4 ngày trước',
            comment: '7',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
        ],
      },
      {
        index: 3,
        name: 'Của bạn',
        infosYour: [
          {
            num: 1,
            title:
              'Thích cô ấy tối đã ngõ lời nhưng cô ấy kêu cần thời gian suy nghĩ. Tôi còn cơ hội không? ',
            timeActive: '27 phút trước',
            comment: '2',
            images: [
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-pentacles-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
              require('../../assets/deck/ace-of-cups-s.png'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Trò chuyện',
    image: require('../../assets/icons/chat.png'),
    categories: [
      {
        index: 1,
        name: 'Đang diễn ra',
        infos: [
          {
            num: 0,
            base: 0,
            name: 'Rose Tarot',
            fee: 'Có phí',
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            textBtnClick: 'Vào phòng',
            iconBtnClick: require('../../assets/icons/enter-room.png'),
          },
          {
            num: 1,
            base: 2,
            name: 'Huỳnh Thị Thanh Nhung',
            level: 'Tập sự',
            star: require('../../assets/icons/star.png'),
            fee: 'Miễn phí',
            imgChat: require('../../assets/icons/talking.png'),
            state: 'Đang trò chuyện',
            replyPeople: 'Phạm Thị Hồng Ngọc',
            imgQues: require('../../assets/icons/querent-asking.png'),
          },
          {
            num: 2,
            name: 'HAJUNNE',
            level: 'Tập sự',
            star: require('../../assets/icons/star.png'),
            fee: 'Có phí',
            imgChat: require('../../assets/icons/talking.png'),
            state: 'Đang trò chuyện',
            imgQues: require('../../assets/icons/querent-asking.png'),
          },
          {
            num: 3,
            name: 'nguyễn thị thanh nhi',
            level: 'Tập sự',
            star: require('../../assets/icons/star.png'),
            fee: 'Miễn phí',
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            responding: 'Đang chờ phản hồi',
          },
          {
            num: 4,
            base: 0,
            name: 'Chann',
            fee: 'Có phí',
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            textBtnClick: 'Vào phòng',
            iconBtnClick: require('../../assets/icons/enter-room.png'),
          },
          {
            num: 5,
            base: 0,
            name: 'Fresh Sprit Tarot',
            fee: 'Có phí',
            level: 'Sơ cấp II',
            star: require('../../assets/icons/star.png'),
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            textBtnClick: 'Vào phòng',
            iconBtnClick: require('../../assets/icons/enter-room.png'),
          },
          {
            num: 6,
            base: 0,
            name: 'Tarot with Linh Linh',
            fee: 'Có phí',
            level: 'Tập Sự',
            star: require('../../assets/icons/star.png'),
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            textBtnClick: 'Vào phòng',
            iconBtnClick: require('../../assets/icons/enter-room.png'),
          },
          {
            num: 7,
            base: 0,
            name: 'Banana',
            fee: 'Có phí',
            level: 'Sơ cấp II',
            star: require('../../assets/icons/star.png'),
            imgChat: require('../../assets/icons/waiting.png'),
            state: 'Đang chờ',
            textBtnClick: 'Vào phòng',
            iconBtnClick: require('../../assets/icons/enter-room.png'),
          },
        ],
      },
      {
        index: 2,
        name: 'Của bạn',
      },
    ],
  },
  {
    id: 3,
    name: 'BXH Reader',
    image: require('../../assets/icons/ranking.png'),
    categories: [
      {
        num: 1,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: '☘️ Violet ☽O☾Tarot',
        likes: '771',
      },
      {
        num: 2,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'Collison 😘',
        likes: '587',
      },
      {
        num: 3,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'Tiệm Tarot của Bell',
        likes: '97',
      },
      {
        num: 4,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'Orianna Tarot',
        likes: '78',
      },
      {
        num: 5,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: '✨HAJUNNE✨',
        likes: '66',
      },
      {
        num: 6,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'HEHE',
        likes: '53',
      },
      {
        num: 7,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'CatnSea',
        likes: '30',
      },
      {
        num: 8,
        image: require('../../assets/icons/avatar-ranking.png'),
        name: 'Ween',
        likes: '29',
      },
    ],
  },
];