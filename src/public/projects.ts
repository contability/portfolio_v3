interface IProjects {
  [name: string]: {
    id: number;
    title: string;
    start: string | Date;
    end: string | Date;
    role: string;
    responsibility: string;
    summary: string;
    description: string[];
    images?: string[];
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
    responsibility: 'server setup, database setup, spring-framework setup and overall application development.',
    summary:
      '지방자치단체 및 공공 기관에서 유의미한 공간 정보를 간단하고 효과적으로 활용하기 위한 시스템으로 비용 절감 및 업무 효율 향상을 목적으로 하는 B2B 프로젝트입니다.',
    description: [
      '전자 정부 프레임워크를 활용하여 도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 개발하였고 주기적인 데이터 갱신 batch 프로그램의 경우 spring boot로 개발하였습니다.',
      '버전 관리는 SVN이 사용되었고 데이터베이스는 해당 기관의 서버 상태, 계약 조건과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러 가지 데이터베이스를 다루게 되었습니다.',
      '클라이언트는 vanillaJs, jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식이 사용되었습니다.',
      '그 외 주요 사용 라이브러리, 툴로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영하였고 프로젝트 개발 인원은 평균 2-3명으로 이루어졌습니다. ',
      '저의 첫 프로젝트 경험으로서 시스템 전체의 큰 그림을 볼 수 있었고 현재 FE 업무를 해나감에 있어서 BE와 소통하는 부분 등 여러 부분에서 도움이 되는 경험이었습니다.',
      '해당 프로젝트 중 서버에서 내려받은 데이터를 파싱하고 지도와 데이터 그리드로 보여지게 하는 작업에 더 큰 매력을 느꼈고',
      '당시 사용했던 기술들을 활용해 사용자들이 필요로 하는 기능을 만들어내는 것도 물론 기뻤지만 좀 더 모던한 기술을 다루고 싶다는 욕심이 생겨 널리 사용되던 react.js를 독학하고 FE로 전향하게 되었습니다.',
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
  },
  defi: {
    id: 2,
    title: 'Defi Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary:
      'ERC20 표준 확장 암호 화폐를 예치하여 상품 플랜(고정형/가변형)에 따라 책정된 보상만큼 유저에게 제공하는 B2C 서비스입니다.',
    description: [
      'web3.js를 사용하여 예치, 출금, 보상 수령 및 외부 토큰을 확장 토큰으로 교환 하여 사용할 수 있게 하는 교환소를 구현하였습니다.',
      '웹 서버는 AWS EC2를, 파일 스토리지는 AWS S3를 활용하였고 solidity 언어를 통해 smart contract를 배포, 사용하였습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      'FE로 전향한 후 처음 진행하게 된 프로젝트이며 비록 규모가 큰 프로젝트는 아니었지만 새로운 언어를 사용하는 프로젝트를 홀로 습득한 지식으로 구현해나간 경험이 지금 지식을 습득하는데 있어서 자신감과 같은 좋은 영향이 되고 있습니다.',
      '개발은 디자이너 한 분과 진행하였으며 기존과 달리 애자일을 지향하는 프로젝트는 처음이라 좋은 경험이 되었습니다.',
    ],
    images: ['image_projects_2_1.png', 'image_projects_2_2.png', 'image_projects_2_3.png'],
    link: {
      git: 'https://github.com/contability/defi_front',
    },
  },
  nftMarket: {
    id: 3,
    title: 'NFT Market Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary:
      '이더리움 폴리곤용 솔루션을 기반으로 직접 또는 경매를 통해 대체 불가능한 토큰을 판매할 수 있는 시장을 제공하는 B2C 서비스입니다.',
    description: [
      'web3.js를 사용하여 사용자의 각종 미디어 요소를 구매, 판매할 수 있도록 개발하였습니다.',
      '웹 서버는 AWS EC2를, 파일 스토리지는 AWS S3를 활용하였고 solidity 언어를 통해 smart contract를 배포, 사용하였습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      '개발은 디자이너 1, 개발자 2로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, notion 등 각종 툴을 활용하였습니다.',
      '본격적으로 스타트업 문화에서 흔히 사용하는 툴로 다른 개발 인원들과 소통하며 개발하기 시작하기 시작했고 진행됨에 따라 업무 소통 방식의 중요성을 느끼게 된 프로젝트입니다.',
    ],
    images: ['image_projects_3_1.png', 'image_projects_3_2.png'],
    link: {
      url: 'https://limited.collexx.io/about',
    },
  },
  exchange: {
    id: 4,
    title: 'Exchange Project',
    start: '2022-06',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary: '현물, 파생 상품과 소셜 암호화 트레이딩을 제안하는 암호화 거래 B2C 서비스입니다.',
    description: [
      'web3.js를 사용하여 자체 배포한 암호 화폐와 기존 암호 화폐의 환전이 가능하도록 개발하였습니다.',
      '웹 서버는 AWS EC2를, 파일 스토리지는 AWS S3를 활용하였습니다.',
      '버전 관리는 GIT이 사용되었고 react.js 프레임 워크에 redux toolkit, styled-components, materialUI, axios 등의 툴을 사용하였습니다.',
      '개발은 디자이너 1, 개발자 3으로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, notion 등 각종 툴을 활용하였습니다.',
      '차트 구현이 기억에 많이 남는데 유료 차트 라이브러리는 사용할 수 없었던 조건으로 암호 화폐 시세 데이터 가져오는 것 뿐만 아니라 매 초 마다 갱신되는 분봉 데이터를 자동으로 갱신해주는 기능이 없어 고민이 많았지만',
      '백엔드와 활발한 소통을 통해 여러가지 시도를 할 수 있었고 결국 서버와 소켓을 통해 틱 데이터를 받아 TradingViewWidget을 사용하여 분봉을 갱신하는 방식으로 성공하게 된 기억이 있습니다.',
      '고민과 실패가 많았던 만큼 성공했을 때의 기쁨이 기억에 강하게 남아있고 현재 개발을 하면서도 좋은 영향을 주는 기억으로 남아있습니다.',
    ],
    images: ['mov_project_4.mp4'],
    link: {
      url: 'https://github.com/contability/xchnge_front',
    },
  },
  albamon: {
    id: 5,
    title: 'albamon Web Mobile Migration Project',
    start: '2022-09',
    end: '2022-10',
    role: 'front-end development',
    responsibility: 'next.js application development',
    summary: '구인/구직 채용 중개 플랫폼 마이그레이션 프로젝트',
    description: [
      '기존 알바몬 서비스를 next.js로 마이그레이션하는 프로젝트입니다.',
      'next.js 프레임 워크에 typescript가 사용되었고 scss로 퍼블리싱, zustand, axios, react-query 등의 툴과 테스트 코드로 storybook, jest가 사용되었습니다.',
      '버전 관리는 GIT이 사용되었고 이 때 처음으로 GIT-FLOW 전략을 접하고 사용하게 되어 많은 인원이 한 프로젝트에 투입 되었을 때 이런 방식으로 효과적으로 관리할 수 있구나 깨닫고 배울 수 있었습니다.',
      '프로젝트 중간에 투입 되어 총 3개의 task를 맡아 진행하였으며 next.js에 대한 이해가 모자라 처음엔 헤매는 부분도 있었으나 점차 익숙해지며 성공적으로 수행할 수 있었고 ssr 등 next.js에 대한 이해가 생기는 계기가 되었습니다.',
      '효과적으로 잘 정리되어 작성된 각종 문서와 convention은 프로젝트에 참여한 많은 개발자들의 코드를 어느 정도 균일하게 만들어주고 개발자 각각의 능률을 해치는게 아닌 고민을 덜어줄 수 있다는 것을 느끼게 된 것도 큰 수확이었습니다.',
      '규모가 큰 회사인 만큼 레벨이 높아 부담감도 있었지만 많은 시니어 분들과 협업하며 배울 수 있었고 지금까지도 크게 귀중한 경험으로 남아있는 프로젝트입니다.',
    ],
    images: ['image_projects_5_1.png', 'image_projects_5_2.png'],
    link: {
      url: 'https://m.albamon.com/',
    },
  },
  fileup: {
    id: 6,
    title: 'fileup',
    start: '2023-07',
    end: '2023-09',
    role: 'front-end development',
    responsibility: 'next.js application development, AWS infrastructure construction',
    summary: '자체 발행 코인에 대하여 환전, 출금 및 패키지 상품 구매 등이 구현 된 B2C 프로젝트입니다.',
    description: [
      '웹 서버 배포는 AWS Amplify를 통해 CI/CD 기능을 사용하였고 파일 스토리지는 AWS S3를 활용하였습니다.',
      '버전 관리는 GIT-FLOW 전략을 사용하였고 next.js 프레임 워크에 typescript를 사용, zustand, tailwindCSS, axios, react-query, react-hook-form, zod 등의 툴을 사용하였습니다.',
      '테스트 코드는 storybook을 활용하였습니다.',
      '개발은 기획 1, 디자이너 1, BE 3, FE 2로 구성되어 진행하였으며 업무 소통을 위해 slack, jira, figma, teams 등 각종 툴을 활용하였습니다.',
      '흔히 사용되는 CSS 프레임워크 중 하나인 tailwindCSS를 실제 프로젝트에 적용한 경험은 처음이라 개인적으로는 새로웠고 새로운 것을 적용하는 것에 설레는 기분으로 시작하게 된 프로젝트입니다.',
      '초기엔 장황한 클래스 네임에 어지러웠지만 이내 설정을 끝낸 뒤엔 styled-components 보다 상대적으로 손 쉽게 css 속성을 적용시킨다는 점 등 장단점을 느낄 수 있어서 좋았습니다.',
      'GIT 사용 측면에서도 GIT-FLOW 내에서 지금까지 PR을 올리던 입장에서 PR을 받고 production에 merge까지 수행 하는 입장이 되어보니 저장소를 다루는 스킬 뿐만 아니라 시야도 넓어진 느낌이 들었습니다.',
      '또한 amplify를 추천 받고 적용하는 중 역시나 도메인을 구매하고 도메인 연결을 하는 등의 세팅에서 모자란 부분을 느꼈지만 세팅을 완료한 후엔 아주 편하게 CI/CD를 활용할 수 있어 만족도가 높았습니다.',
      '무엇보다 학습 용이 아닌 실제 프로젝트를 보일러 플레이트 부터 서비스 배포까지 처음으로 완성 시켰다는 점에서 좋은 경험을 했다고 느낍니다.',
    ],
    images: ['image_projects_6_1.png', 'image_projects_6_2.png', 'image_projects_6_3.png'],
    link: {
      url: 'https://www.fileup.global/',
    },
  },
};
