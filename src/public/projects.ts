interface IProjects {
  [name: string]: {
    id: number;
    title: string;
    start: string | Date;
    end: string | Date;
    role: string;
    responsibility: string[];
    summary: string;
    description: string[];
    images?: string[];
    skills?: string[];
    link?: {
      url?: string;
      git?: string;
    };
  };
}
export const projects: IProjects = {
  kworks: {
    id: 1,
    title: 'GIS 공간 정보 시스템',
    start: '2020-04',
    end: '2022-05',
    role: 'full stack development',
    responsibility: [
      'spring framework MVC 패턴 SW 개발',
      'openLayers 라이브러리를 활용한 지도 시스템 개발',
      'SOAP/REST API 방식의 외부 데이터 연계',
      'vanillaJs, javascript 및 다양한 라이브러리를 사용하여 동적 컨텐츠 개발',
      'easyUI 라이브러리를 활용한 UI 구현',
      '리포팅 툴을 활용한 통계 리포트 출력',
      'On-premise 운영 방식 구축',
      '개발 인원 평균 3명',
      '기여도 60% 이상',
    ],
    summary:
      '지방자치단체 및 공공 기관에서 유의미한 공간 정보를 간단하고 효과적으로 활용하기 위한 시스템으로 비용 절감 및 업무 효율 향상을 목적으로 하는 B2B 프로젝트',
    description: [
      '전자 정부 프레임워크를 활용하여 도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 개발하였고 주기적인 데이터 갱신 batch 프로그램의 경우 spring boot로 개발하였습니다.',
      '버전 관리는 SVN이 사용되었고 데이터베이스는 해당 기관의 서버 상태, 계약 조건과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러 가지 데이터베이스를 다루게 되었습니다.',
      '저의 첫 프로젝트 경험으로서 시스템 전체의 큰 그림을 볼 수 있었고 현재 FE 업무를 해나감에 있어서 BE와 소통하는 부분 등 여러 부분에서 도움이 되어주는 경험이었습니다.',
      '계속해서 팀원들이 바뀌는 상황에서 업무 인수인계와 교육등이 잦아 일정에 부담을 느꼈지만 그로인해 저에게도 기본기를 다지게 되는 시간이고 기회였다고 생각합니다.',
      '총 37개의 사업을 수행하며 서버에서 내려받은 데이터를 파싱하고 지도와 데이터 그리드로 보여지게 하는 작업에 보다 더 큰 매력을 느꼈고',
      '당시 사용했던 기술들을 활용해 사용자들이 필요로 하는 기능을 만들어내는 것도 물론 기뻤지만 좀 더 모던한 기술을 다루고 싶다는 욕심이 생겨 널리 사용되던 react.js를 독학하고 FE로 전향하는 발판을 만들어준 프로젝트입니다.',
    ],
    images: [
      'image_projects_1_1.jpg',
      'image_projects_1_2.jpg',
      'image_projects_1_3.png',
      'image_projects_1_4.jpg',
      'image_projects_1_5.jpg',
    ],
    link: {
      git: 'https://github.com/contability/gis_project',
    },
    skills: [
      'java',
      'spring framework',
      'javascript',
      'vanillaJs',
      'jQuery',
      'oracle',
      'msSQL',
      'postgreSQL',
      'mySQL',
      'easy UI',
      'openLayers',
      'tomcat',
      'SVN',
    ],
  },
  defi: {
    id: 2,
    title: 'Defi Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'React 개발',
      'materialUI 활용(관리자 페이지)',
      'smart contract 배포 및 활용',
      'api data fetching',
      'web3.js 활용',
      'AWS EC2 / S3 활용',
      '프로젝트 인원 3명',
      '기여도 55%',
    ],
    summary:
      'ERC20 표준 확장 암호 화폐를 예치하여 상품 플랜(고정형/가변형)에 따라 책정된 보상만큼 유저에게 제공하는 B2C 서비스입니다.',
    description: [
      'FE로 전향한 후 처음 진행하게 된 프로젝트이며 서비스 배포가 아닌 구현까지의 역할을 수행했습니다.',
      '홀로 습득한 지식으로 실제 프로젝트에 적용하며 많은 부분에서 부족함을 느꼈고 퇴근 후에 공부를 하거나 검색 혹은 커뮤니티를 활용하여 풀리지 않던 부분을 해결 하는 등의 노력으로 구현해나가고 성공적으로 완료하게 된 경험이 지금도 지식을 습득하는데 있어서 자신감과 같은 좋은 영향이 되고 있습니다.',
      '개발은 디자이너 1, BE 1, FE 1로 진행하였으며 기존과 달리 애자일을 지향하는 프로젝트는 처음이라 좋은 경험이 되었습니다.',
      'solidity 언어를 통해 smart contract를 배포하고 활용하는 경험도 할 수 있었고 블록체인에 대한 경험을 쌓는 기회가 되었습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      '기획자의 부재로 클라이언트 미팅부터 기획까지 부담하여 일정에 쫓기며 작업했었지만 그만큼 새로운 경험들을 할 수 있었던 부분에서 즐겁게 진행했던 프로젝트입니다.',
    ],
    images: ['image_projects_2_1.png', 'image_projects_2_2.png', 'image_projects_2_3.png'],
    link: {
      git: 'https://github.com/contability/defi_front',
    },
    skills: [
      'javascript',
      'react',
      'redux',
      'nodeJs',
      'mySQL',
      'axios',
      'material UI',
      'styled-components',
      'solidity',
      'Blockchain',
      'web3',
      'amazon EC2',
      'git',
    ],
  },
  nftMarket: {
    id: 3,
    title: 'NFT Market Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'React 개발',
      'AWS S3 data access',
      'api data fetching',
      'web3.js 활용',
      'AWS EC2 / S3 활용',
      'smart contract 배포 & 활용',
      '개발인원 평균 1 ~ 2명',
      '기여도 60% ~ 100%',
    ],
    summary:
      '이더리움 폴리곤용 솔루션을 기반으로 직접 또는 경매를 통해 대체 불가능한 토큰을 판매할 수 있는 시장을 제공하는 B2C 서비스입니다.',
    description: [
      'web3.js를 사용하여 사용자의 각종 미디어 요소를 구매, 판매할 수 있도록 개발하였습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      '개발은 디자이너 1, BE 1, FE 1로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, notion 등 각종 툴을 활용하였습니다.',
      '프로젝트 참여 인원들 간의 대화가 매끄럽지 않아 업무 처리가 제대로 되지 않는 문제점이 있었고 의사소통이 충분히 이루어지지 않고 있다고 판단하여 매일 5~10분 정도 업무 회의를 하는 데일리 스크럼과 적극적인 notify를 제안했습니다.',
      '그렇게 스크럼을 진행했고 팀원들도 점점 적응해나간 결과로 팀 내 의사 소통이 크게 개선되었고, 업무 지연 문제가 해결되며 프로젝트의 품질도 자연스레 향상되었습니다.',
      '직접 의사소통 부분으로 고민하고 해결해보며 구성원과의 의사소통이 얼마나 중요한 부분인지를 다시 한 번 느끼게 되었고 소중한 성과로 남아있습니다.',
    ],
    images: ['image_projects_3_1.png', 'image_projects_3_2.png'],
    link: {
      url: 'https://limited.collexx.io/about',
    },
    skills: [
      'javascript',
      'react',
      'redux',
      'axios',
      'material UI',
      'styled-components',
      'amazon EC2',
      'amazon S3',
      'Blockchain',
      'web3',
      'git',
    ],
  },
  exchange: {
    id: 4,
    title: 'Exchange Project',
    start: '2022-06',
    end: '2022-07',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'React page router 개발',
      'materialUI 활용(관리자 페이지)',
      'Traiding View 거래 차트 동기화 및 데이터 활용',
      'api data fetching',
      'web3.js 활용',
      'AWS EC2 / S3 활용',
      '프로젝트 인원 3명',
      '기여도 35%',
    ],
    summary: '현물, 파생 상품과 소셜 암호화 트레이딩을 제안하는 암호화 거래 B2C 서비스입니다.',
    description: [
      'web3.js를 사용하여 자체 배포한 암호 화폐와 기존 암호 화폐의 환전이 가능하도록 개발하였습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux toolkit, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      '개발은 디자이너 1명, BE 1, FE 1로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, notion 등 각종 툴을 활용하였습니다.',
      '차트 구현이 기억에 많이 남는데 유료 차트 라이브러리는 사용할 수 없었던 조건으로 암호 화폐 시세 데이터 가져오는 것 뿐만 아니라 매 초 마다 갱신되는 분봉 데이터를 자동으로 갱신해주는 기능이 없어 고민이 많았지만',
      '백엔드와 활발한 소통을 통해 여러가지 시도를 할 수 있었고 결국 서버와 소켓을 통해 틱 데이터를 받아 TradingViewWidget을 사용하여 분봉을 갱신하는 방식으로 성공하게 된 기억이 있습니다.',
      '배포까지 완료하지 못하여 아쉬움이 남지만 고민과 실패가 많았던 만큼 성공했을 때의 기쁨이 기억에 강하게 남아있고 현재 개발을 하면서도 좋은 영향을 주는 기억으로 남아있습니다.',
    ],
    images: ['mov_project_4.mp4'],
    link: {
      url: 'https://github.com/contability/xchnge_front',
    },

    skills: [
      'javascript',
      'react',
      'redux',
      'styled-components',
      'nodeJs',
      'mySQL',
      'axios',
      'Blockchain',
      'web3',
      'amazon EC2',
      'git',
    ],
  },
  albamon: {
    id: 5,
    title: 'albamon Web Mobile Migration Project',
    start: '2022-09',
    end: '2022-10',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'Next.js page router 개발',
      'Git-flow 활용',
      '공통 컴포넌트 작성',
      '테스트 코드 작성',
      'api data fetching',
      '프로젝트 인원 20명 이상',
      '기여도 3%',
    ],
    summary: '구인/구직 채용 중개 플랫폼 마이그레이션 프로젝트',
    description: [
      '기존 알바몬 서비스를 next.js로 마이그레이션하는 프로젝트입니다.',
      '프로젝트 중간에 투입 되어 총 3개의 task를 처리하는 역할을 수행했고 성공적으로 완료하였습니다.',
      'next.js 프레임 워크에 typescript가 사용되었고 scss로 퍼블리싱, zustand, axios, react-query 등의 툴과 테스트 코드로 storybook, jest가 사용되었습니다.',
      '버전 관리는 GIT이 사용되었고 이 때 처음으로 GIT-FLOW 전략을 접하고 사용하게 되어 많은 인원이 한 프로젝트에 투입 되었을 때 이런 방식으로 효과적으로 관리할 수 있구나 깨닫고 배울 수 있었습니다.',
      'next.js에 대한 이해가 모자라 처음엔 헤매는 부분도 있었으나 점차 익숙해지며 성공적으로 수행할 수 있었고 ssr 등 next.js에 대한 이해가 생기는 계기가 되었습니다.',
      '효과적으로 잘 정리되어 작성된 각종 문서와 컨벤션은 프로젝트에 참여한 많은 개발자들의 코드를 어느 정도 균일하게 만들어주고 개발자 각각의 능률을 해치는게 아닌 고민을 덜어줄 수 있다는 것을 느끼게 된 것도 큰 수확이었습니다.',
      '참여한 기간이나 업무 기여도가 낮아 아쉬움이 많았지만 앞으로 이런 프로젝트에 크게 기여할 수 있는 개발자가 되겠다 다짐할 수 있게된 기회였고 이 외에도 진행하는 동안 개발 문화, 의사 소통, 개발 스킬, 프로젝트에 참여하는 태도 등 많은 것들을 느끼고 배울 수 있었던 시간이었습니다.',
      '규모가 큰 회사인 만큼 레벨이 높아 부담감도 있었고 부족함 또한 느꼈지만 많은 시니어 분들과 협업하며 배울 수 있었고 앞으로도 이런 식의 프로젝트에 참여 혹은 만들어가야겠다 생각이 들었던, 지금까지도 크게 귀중한 경험으로 남아있는 프로젝트입니다.',
    ],
    images: ['image_projects_5_1.png', 'image_projects_5_2.png'],
    link: {
      url: 'https://m.albamon.com/',
    },
    skills: [
      'TypeScript',
      'Next.js',
      'Zustand',
      'React Query',
      'SCSS',
      'axios',
      'React Hook Form',
      'yup',
      'Lodash',
      'ESLint',
      'Prettier',
      'Storybook',
      'Jest',
      'Git Flow',
      'Git Hook',
      'Confluence',
      'Jira',
      'Slack',
      'Figma',
    ],
  },
  fileup: {
    id: 6,
    title: 'fileup',
    start: '2023-07',
    end: '2023-09',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'Next.js page router 개발',
      'Git-flow 활용',
      '공통 컴포넌트 작성',
      '테스트 코드 작성',
      'api data fetching',
      'AWS Amplify / S3 활용',
      '프로젝트 인원 7명',
      '기여도 20%',
    ],
    summary: '자체 발행 코인에 대한 환전, 출금 및 패키지 상품 구매 등이 구현 된 B2C 프로젝트입니다.',
    description: [
      'next.js 프레임 워크에 typescript를 사용, zustand, tailwindCSS, axios, react-query, react-hook-form, zod 등의 툴과 테스트 코드로는 storybook을 사용하였습니다.',
      '개발은 기획 1, 디자이너 1, BE 3, FE 2로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, teams 등 각종 툴을 활용하였습니다.',
      '흔히 사용되는 CSS 프레임워크 중 하나인 tailwindCSS를 실제 프로젝트에 적용한 경험은 처음이라 개인적으로는 새로웠고 새로운 것을 적용하는 것에 설레는 기분으로 시작하게 된 프로젝트입니다.',
      '초기엔 장황한 클래스 네임에 어지러웠지만 이내 설정을 끝낸 뒤엔 styled-components 보다 상대적으로 손 쉽게 css 속성을 적용시킨다는 점 등 장단점을 느낄 수 있어서 좋았습니다.',
      'GIT 사용 측면에서도 GIT-FLOW 내에서 지금까지 PR을 올리던 입장에서 PR을 받고 production에 merge까지 수행 하는 입장이 되어보니 저장소를 다루는 스킬 뿐만 아니라 시야도 넓어진 느낌이 들었습니다.',
      '또한 amplify를 추천 받고 적용하는 중 역시나 도메인을 구매하고 도메인 연결을 하는 등의 세팅에서 모자란 부분을 느꼈지만 세팅을 완료한 후엔 아주 편하게 CI/CD를 활용할 수 있어 만족도가 높았습니다.',
      '무엇보다 처음으로 학습 용이 아닌 실제 프로젝트를 보일러 플레이트 부터 서비스 배포까지 완성 시켰다는 점에서 좋은 경험을 했다고 느낍니다.',
    ],
    images: ['image_projects_6_1.png', 'image_projects_6_2.png', 'image_projects_6_3.png'],
    link: {
      url: 'https://www.fileup.global/',
    },
    skills: [
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'Zustand',
      'React Query',
      'axios',
      'React Hook Form',
      'zod',
      'Lodash',
      'JSON Web Token',
      'ESLint',
      'Prettier',
      'Storybook',
      'Jest',
      'Git Flow',
      'Git Hook',
      'Confluence',
      'Jira',
      'Slack',
      'Figma',
      'amazon S3',
      'AWS Amplify',
    ],
  },
};

export const skillImageURL: Record<string, string> = {
  javascript: 'https://cdn.jumpit.co.kr/images/stacks/javascript.png',
  TypeScript: 'https://cdn.jumpit.co.kr/images/stacks/typescript.png',
  jQuery: 'https://cdn.jumpit.co.kr/images/stacks/jquery.png',
  'jQuery UI': 'https://cdn.jumpit.co.kr/images/stacks/jqueryui.png',
  java: 'https://cdn.jumpit.co.kr/images/stacks/java.png',
  postgreSQL: 'https://cdn.jumpit.co.kr/images/stacks/postgresql.png',
  msSQL: 'https://cdn.jumpit.co.kr/images/stacks/mssql.png',
  oracle: 'https://cdn.jumpit.co.kr/images/stacks/oracle.png',
  mySQL: 'https://cdn.jumpit.co.kr/images/stacks/mysql.png',
  'spring framework': 'https://cdn.jumpit.co.kr/images/stacks/springframework.png',
  react: 'https://cdn.jumpit.co.kr/images/stacks/react.png',
  'Next.js': 'https://cdn.jumpit.co.kr/images/stacks/next.js.png',
  'React Query': 'https://cdn.jumpit.co.kr/images/stacks/ReactQuery.png',
  'Git Flow': 'https://cdn.jumpit.co.kr/images/stacks/GitFlow.png',
  Jira: 'https://cdn.jumpit.co.kr/images/stacks/jira.png',
  Figma: 'https://cdn.jumpit.co.kr/images/stacks/figma.png',
  Zustand: 'https://cdn.jumpit.co.kr/images/stacks/Zustand.png',
  redux: 'https://cdn.jumpit.co.kr/images/stacks/redux.png',
  nodeJs: 'https://cdn.jumpit.co.kr/images/stacks/node.js.png',
  'material UI': 'https://cdn.jumpit.co.kr/images/stacks/material-ui.png',
  git: 'https://cdn.jumpit.co.kr/images/stacks/git.png',
  'amazon EC2': 'https://cdn.jumpit.co.kr/images/stacks/amazonec2.png',
  'amazon S3': 'https://cdn.jumpit.co.kr/images/stacks/amazons3.png',
  tomcat: 'https://cdn.jumpit.co.kr/images/stacks/apachetomcat.png',
  Blockchain: 'https://cdn.jumpit.co.kr/images/stacks/Blockchain.png',
  Slack: 'https://cdn.jumpit.co.kr/images/stacks/slack.png',
  Confluence: 'https://cdn.jumpit.co.kr/images/stacks/confluence.png',
  Lodash: 'https://cdn.jumpit.co.kr/images/stacks/lodash.png',
  axios: 'https://cdn.jumpit.co.kr/images/stacks/axios.png',
  Storybook: 'https://cdn.jumpit.co.kr/images/stacks/storybook.png',
  Jest: 'https://cdn.jumpit.co.kr/images/stacks/jest.png',
  ESLint: 'https://cdn.jumpit.co.kr/images/stacks/eslint.png',
  'AWS Amplify': 'https://cdn.jumpit.co.kr/images/stacks/AWSAmplify.png',
  'JSON Web Token': 'https://cdn.jumpit.co.kr/images/stacks/jsonwebtoken.png',
  TailwindCSS: 'https://cdn.jumpit.co.kr/images/stacks/tailwindcss.png',
};
