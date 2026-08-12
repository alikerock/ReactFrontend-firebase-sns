export const currentUser = {
  id: 1,
  name: '김지현',
  email: 'jihyun.kim@email.com',
  initials: 'JD',
  bio: '프론트엔드 개발자 | React & TypeScript 학습 중 | 배운 것을 기록하는 블로그',
  joinDate: '2024년 10월',
  github: 'https://github.com/jihyun-kim',
  website: '',
  stats: { posts: 12, likes: 254, comments: 38 },
};

export const posts = [
  {
    id: 1,
    title: 'React State와 Props 초보자 가이드',
    content:
      'React를 처음 배우는 개발자들이 가장 헷갈려하는 개념이 State와 Props입니다. 간단히 말해 Props는 부모로부터 전달받는 매개변수이고...',
    fullContent:
      'React를 처음 배우는 개발자들이 가장 헷갈려하는 개념이 State와 Props입니다.\n\nProps는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 읽기 전용 데이터입니다. 함수의 매개변수와 비슷하게 동작합니다.\n\nState는 컴포넌트 내부에서 관리되는 동적 데이터입니다. useState 훅을 사용하여 선언하며, setState를 통해 업데이트할 수 있습니다.',
    author: { id: 1, name: '김지현', initials: 'JD' },
    topic: '프론트엔드',
    likes: 48,
    comments: [
      { id: 1, author: '박서연', initials: 'SY', content: '정말 도움이 많이 됐습니다! 감사합니다.' },
      { id: 2, author: '최민수', initials: 'MS', content: '초보자에게 딱 필요한 설명이네요.' },
      { id: 3, author: '이준혁', initials: 'JH', content: '예시 코드도 추가해 주시면 좋겠어요.' },
    ],
    createdAt: '2시간 전',
    readTime: '5분 소요',
  },
  {
    id: 2,
    title: 'Material UI Grid 시스템 소개',
    content:
      'MUI Grid 시스템은 데스크톱 레이아웃을 구성할 때 매우 유용합니다. CSS Flexbox를 기반으로 12컬럼 구조로 동작하며...',
    fullContent:
      'MUI Grid 시스템은 데스크톱 레이아웃을 구성할 때 매우 유용합니다. CSS Flexbox를 기반으로 12컬럼 구조로 동작하며 반응형 디자인을 쉽게 구현할 수 있습니다.\n\nGrid 컨테이너와 Grid 아이템으로 구성되며, xs, sm, md, lg, xl 등의 브레이크포인트로 반응형을 제어합니다.',
    author: { id: 2, name: '이준혁', initials: 'AS' },
    topic: '웹디자인',
    likes: 24,
    comments: [
      { id: 1, author: '김지현', initials: 'JD', content: '잘 정리된 글이네요!' },
    ],
    createdAt: '5시간 전',
    readTime: '4분 소요',
  },
  {
    id: 3,
    title: 'React Router v7 완벽 가이드',
    content:
      'React Router v7에서 새롭게 추가된 기능들을 살펴봅니다. 중첩 라우팅과 Outlet 컴포넌트를 활용하면 레이아웃 구성이 훨씬 편리해집니다...',
    fullContent:
      'React Router v7에서 새롭게 추가된 기능들을 살펴봅니다. 중첩 라우팅과 Outlet 컴포넌트를 활용하면 레이아웃 구성이 훨씬 편리해집니다.\n\n특히 createBrowserRouter를 사용하면 데이터 로딩과 에러 처리를 더욱 체계적으로 관리할 수 있습니다.',
    author: { id: 1, name: '김지현', initials: 'JD' },
    topic: '프론트엔드',
    likes: 35,
    comments: [],
    createdAt: '1일 전',
    readTime: '6분 소요',
  },
  {
    id: 4,
    title: 'CSS Flexbox 실전 예제 모음',
    content:
      'Flexbox는 현대 웹 레이아웃의 핵심입니다. justify-content, align-items, flex-wrap 등 주요 속성들을 실전 예제와 함께 알아봅니다...',
    fullContent:
      'Flexbox는 현대 웹 레이아웃의 핵심입니다. justify-content, align-items, flex-wrap 등 주요 속성들을 실전 예제와 함께 알아봅니다.\n\n특히 중앙 정렬, 균등 배분, 반응형 래핑 등의 패턴은 실무에서 매우 자주 사용됩니다.',
    author: { id: 3, name: '박서연', initials: 'SY' },
    topic: '웹디자인',
    likes: 61,
    comments: [
      { id: 1, author: '이준혁', initials: 'AS', content: '정말 유용한 예제들이네요!' },
    ],
    createdAt: '2일 전',
    readTime: '8분 소요',
  },
];

export const myPosts = posts.filter((p) => p.author.id === 1);

export const topics = ['전체', '웹디자인', '앱디자인', '프론트엔드', '백엔드', '기타'];

export const popularTopics = [
  { tag: '프론트엔드', count: 42 },
  { tag: 'React', count: 38 },
  { tag: '백엔드', count: 27 },
  { tag: '웹디자인', count: 21 },
];
