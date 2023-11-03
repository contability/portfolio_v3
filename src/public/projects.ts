import { ReactNode } from 'react';

interface IProjects {
  [name: string]: {
    /**
     * ID
     */
    id: number;
    /**
     * 프로젝트 명
     */
    title: string;
    /**
     * 시작일
     */
    start: string | Date;
    /**
     * 종료일
     */
    end: string | Date;
    /**
     * 역할
     */
    role: string;
    /**
     * 구체적인 책임
     */
    responsibility: string[];
    /**
     * 요약
     */
    summary: string;
    /**
     * 주요 역할
     */
    major: string[];
    /**
     * 성과
     */
    result: string[];
    /**
     * 교훈
     */
    precept?: ReactNode[];
    /**
     * 이미지
     */
    images?: string[];
    /**
     * 기술 스택
     */
    skills?: string[];
    /**
     * 링크
     */
    link?: {
      url?: string;
      git?: string;
    };
  };
}
// FIXME: 전체적인 내용 수정 필요
export const projects: IProjects = {
  kworks: {
    id: 1,
    title: 'GIS spatial information system',
    start: '2020-04',
    end: '2022-05',
    role: 'full stack development',
    responsibility: [
      'spring framework MVC 패턴 SW 개발',
      'Oracle, MySQL, PostgreSQL 등 다양한 데이터베이스 활용',
      'openLayers 라이브러리를 활용한 지도 시스템 개발',
      'SOAP/REST API 방식의 외부 데이터 연계',
      'vanillaJs, javascript 및 다양한 라이브러리를 사용하여 동적 컨텐츠 개발',
      'easyUI 라이브러리를 활용한 UI 구현',
      '리포팅 툴을 활용한 통계 리포트 출력',
      'SVN을 이용한 버전 관리',
      'On-premise 운영 방식 구축',
      '개발 인원 평균 3명(기여도 60% 이상)',
    ],
    summary:
      '이 프로젝트는 지방자치단체 및 공공 기관에서 유의미한 공간 정보를 효율적으로 관리하고 활용하기 위한 목적으로 추진되었고 주요 목표는 비용 절감과 업무 효율성 향상을 실현하는 것에 있었습니다.',
    major: [
      '프로젝트 개발팀의 주요 멤버로서, 시스템의 전반적인 아키텍처 및 기능 개발에 참여하였습니다.',
      '전자 정부 프레임워크를 활용하여 도로, 상수, 하수, 공원 등 해당 기관에서 관리하는 공간 정보를 지도로 표현하여 조회, 수정, 삭제 기능을 개발하였습니다.',
      'Spring Batch를 이용하여 주기적으로 SOAP API로 데이터를 요청하고 데이터베이스에 저장하는 데이터 갱신 프로세스를 구축하여 항상 최신 정보를 제공하고 신속한 의사 결정을 가능하게 했습니다.',
    ],
    result: [
      '총 38개의 사업을 수행하며, 데이터를 파싱하고 지도와 데이터 그리드로 효과적으로 표현하는 작업에 참여하였습니다.',
      '프로젝트의 성공적인 완수로 인해 비용 절감 및 업무 효율성 향상을 도모하였습니다.',
    ],
    precept: [
      '이 프로젝트를 통해 전체적인 시스템 구축에 대한 이해를 높일 수 있었으며, 백엔드와의 원활한 소통을 통해 현재 프론트엔드 업무에도 도움이 되고 있습니다. ',
      '프로젝트 참여 인원의 잦은 교체 등 다양한 상황에 신속하게 적응하는 능력을 향상시킬 수 있는 기회였습니다.',
      '해당 경험들 중 서버로부터 받은 데이터를 파싱하고 표현하는 작업하는 즐거움이 상대적으로 더 크다고 느꼈고 이를 통해 javascript의 현대적인 기술에 대한 열망이 커져 React.js를 독학하고 프론트엔드 개발로 전향하는 계기를 마련하였습니다.',
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
    title: 'Defi Platform Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'React 개발',
      'materialUI 활용(관리자 페이지)',
      'smart contract 배포 및 활용',
      'RESTful API',
      'Web3.js를 활용한 블록체인과의 상호작용 구현',
      'AWS EC2 및 S3를 활용한 서버 관리',
      'BE1 / FE1',
      '기여도 55%',
    ],
    summary:
      'ERC20 표준 확장 암호 화폐를 예치하여 상품 플랜에 따라 책정된 보상을 사용자에게 제공하는 B2C 서비스를 구축하는 것을 목표로 하였습니다.',
    major: [
      'React를 사용하여 동적인 사용자 인터페이스 및 상호작용 가능한 컴포넌트를 개발하였습니다.',
      'Material-UI를 활용하여 사용자 친화적이고 일관된 UI 디자인을 구현하여 사용자들의 경험을 향상시켰습니다.',
      'Web3.js를 통해 사용자들이 암호 화폐를 예치하고 보상을 받을 수 있는 프로세스를 사용자 친화적으로 구현하였습니다.',
    ],
    result: [
      '사용자들에게 직관적이고 편리한 서비스 경험을 제공하여 사용자들의 만족도를 높였습니다.',
      '사용자들이 편리하게 암호 화폐를 예치하고 보상을 받을 수 있는 사용자 친화적인 인터페이스를 구현하여 서비스의 활용률을 높였습니다.',
    ],
    precept: [
      'FE로 전향한 후 처음 진행하게 된 프로젝트이며 서비스 배포가 아닌 구현까지의 역할을 수행했습니다.',
      '블록체인과의 상호작용을 통해 사용자들이 편리하게 서비스를 이용할 수 있는 기능을 구현하는 경험을 할 수 있었습니다.',
      '홀로 습득한 지식으로 실제 프로젝트에 적용하며 많은 부분에서 부족함을 느꼈고 퇴근 후에 공부를 하거나 검색 혹은 커뮤니티를 활용하여 풀리지 않던 부분을 해결 하는 등의 노력으로 구현해나가고 성공적으로 완료하게 된 경험이 지금도 지식을 습득하는데 있어서 자신감을 갖는 좋은 영향이 되고 있습니다.',
      '또한, 이 프로젝트를 통해 사용자 중심의 프로덕트 디자인의 중요성을 깨닫게 되었습니다.',
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
    title: 'NFT Market Platform Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: [
      'Web Publishing',
      'React 개발',
      'Redux, Styled-components, MaterialUI, Axios를 사용한 개발',
      'RESTful API',
      'Web3.js를 활용한 블록체인과의 상호작용 구현',
      'AWS EC2 및 S3를 활용한 서버 관리',
      'smart contract 배포 & 활용',
      'BE1 / FE1',
    ],
    summary:
      '이 프로젝트는 이더리움 폴리곤용 솔루션을 기반으로, NFT를 직접 판매하거나 경매를 통해 거래할 수 있는 B2C 서비스를 제공하는 것을 목표로 하였습니다. 이를 통해 사용자들이 각종 미디어 요소를 구매 및 판매할 수 있도록 했습니다.',
    major: [
      'Web3.js를 사용하여 사용자의 각종 미디어 요소를 구매, 판매할 수 있는 기능을 개발하였습니다.',
      'AWS S3 데이터 접근을 통해 사용자들이 원활하게 미디어 파일을 업로드하고 다운로드할 수 있도록 지원하였습니다.',
      '프로젝트 팀 내 의사 소통 문제를 해결하기 위해 매일 5~10분의 데일리 스크럼을 제안하고 도입했습니다.',
      'GIT을 통한 버전 관리를 운영하여 프로젝트의 코드 품질과 협업 효율을 향상시켰습니다.',
    ],
    result: [
      '팀 내 의사 소통의 개선으로 프로젝트의 진행 상황을 원활하게 공유하고, 업무 처리 효율성을 향상시키는 데 성공하였습니다.',
      '사용자들이 원활하게 NFT 거래를 진행할 수 있는 플랫폼을 구축하여 사용자들의 만족도를 높였습니다.',
    ],
    precept: [
      '프로젝트 참여 인원들 간의 대화가 매끄럽지 않아 업무 처리가 제대로 되지 않는 문제점이 있었고 의사소통이 충분히 이루어지지 않고 있다고 판단하여 데일리 스크럼과 적극적인 notify를 제안했습니다.',
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
      'jira',
      'slack',
      'figma',
      'notion',
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
      'React 개발',
      'materialUI 활용(관리자 페이지)',
      'Traiding View 거래 차트 동기화 및 데이터 활용',
      'RESTful API',
      'Web3.js를 활용한 블록체인과의 상호작용 구현',
      'AWS EC2 및 S3를 활용한 서버 관리',
      'BE1 / FE1',
    ],
    summary: '암호 화폐 거래를 위한 플랫폼을 구축하는 것을 목표로 하는 프로젝트입니다.',
    major: [
      'React 및 Material-UI를 활용하여 사용자 친화적이고 직관적인 UI를 구현하여 사용자들이 쉽게 거래를 할 수 있도록 도왔습니다.',
      'TradingViewWidget 차트를 활용하여 사용자들이 실시간 시세 변동을 확인할 수 있도록 지원하였습니다.',
      '코드를 리팩토링하고, 불필요한 네트워크 요청을 줄이는 등의 작업을 수행하였습니다.',
    ],
    result: [
      '사용자들이 원활하게 암호 화폐를 거래할 수 있는 플랫폼을 제공하여 사용자들의 만족도를 높였습니다.',
      '성능 최적화를 통해 사용자들의 경험을 향상시킬 수 있었습니다.',
    ],
    precept: [
      '이 프로젝트를 통해 백엔드와의 원활한 소통의 중요성을 깨닫게 되었으며, 코드의 성능을 개선하는 방법에 대해 배우게 되었습니다.',
      '특히 차트 구현이 기억에 많이 남는데 유료 차트 라이브러리는 사용할 수 없었던 조건으로 암호 화폐 시세 데이터 가져오는 것 뿐만 아니라 매 초 마다 갱신되는 분봉 데이터를 자동으로 갱신해주는 기능이 없어 고민이 많았습니다. 백엔드와 활발한 소통을 통해 여러가지 시도를 할 수 있었고 결국 서버와 소켓을 통해 틱 데이터를 받아 TradingViewWidget을 사용하여 분봉을 갱신하는 방식으로 성공하게 된 기억이 있습니다.',
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
      'jira',
      'slack',
      'figma',
      'notion',
    ],
  },
  albamon: {
    id: 5,
    title: 'Albamon Web Mobile Migration Project',
    start: '2022-09',
    end: '2022-10',
    role: 'front-end development',
    responsibility: [
      '반응형 Web Publishing',
      'Next.js 프레임워크와 TypeScript, SCSS를 활용한 프론트엔드 개발',
      'Zustand와 Axios를 활용한 상태 관리 및 데이터 처리',
      'React-Query를 활용한 데이터 캐싱 및 최적화',
      'Storybook, Jest를 활용한 테스트 코드 작성',
      'Git-flow 활용',
      '공통 컴포넌트 작성',
      '프로젝트 인원 20명 이상',
    ],
    summary:
      '기존에 존재하던 동일 서비스를 보다 현대적이고 뛰어난 성능을 제공하는 Next.js로 마이그레이션하는 프로젝트입니다. 이 프로젝트는 사용자들이 향상된 속도와 효율성을 경험할 수 있도록 기존 서비스를 Next.js 플랫폼으로 옮기는 작업을 목표로 하였습니다.',
    major: [
      '프로젝트 도중 중간 투입 되어 공고 보기, 공고 수정, 브랜딩 페이지 등 총 4개의 Task를 담당하였습니다.',
      'Next.js 프레임워크를 활용하여 페이지 라우터를 개발하고, 재사용 할 수 있는 공통 컴포넌트와 custom hook을 구현하였습니다.',
      'Git-flow 전략을 활용하여 프로젝트의 구성원들과 협업하여 프로젝트를 진행하였습니다.',
      'Jest를 활용한 테스트 코드 작성에 참여하였습니다.',
    ],
    result: [
      '프로젝트 중간에 투입되었으나, Next.js에 대한 부족한 이해를 극복하며 프로젝트의 성공적인 완수에 기여하였습니다.',
      '프로젝트의 안정성을 보장하기 위해 테스트 코드 작성에 참여하여 플랫폼의 신뢰성을 높일 수 있었습니다.',
      '프로젝트를 통해 다양한 기술과 협업 경험을 쌓을 수 있었고, 팀원들과의 원활한 의사소통과 협업을 통해 효율적으로 프로젝트를 진행할 수 있는 방법을 배우게 되었습니다.',
      '프로젝트의 규모가 크기 때문에 프로젝트 문서와 컨벤션을 철저히 준수하며 협업하였고, 이를 통해 프로젝트의 일관성과 개발 효율성을 향상시켰습니다.',
    ],
    precept: [
      '규모가 큰 회사인 만큼 레벨이 높아 부담감도 있었고 부족함 또한 느꼈지만 많은 시니어 분들과 협업하며 배울 수 있었고 앞으로도 이런 식의 프로젝트에 참여 혹은 만들어가야겠다 생각이 들었던, 지금까지도 크게 귀중한 경험으로 남아있는 프로젝트입니다.',
      '효과적으로 잘 정리되어 작성된 각종 문서와 컨벤션은 프로젝트에 참여한 많은 개발자들의 코드를 어느 정도 균일하게 만들어주고 개발자 각각의 능률을 해치는게 아닌 고민을 덜어줄 수 있다는 것을 느끼게 된 것은 큰 수확이었습니다.',
      '참여한 기간이나 업무 기여도가 낮아 아쉬움이 많았지만 앞으로 이런 프로젝트에 크게 기여할 수 있는 개발자가 되겠다 다짐할 수 있게된 기회였고 이 외에도 진행하는 동안 개발 문화, 의사 소통, 개발 스킬, 프로젝트에 참여하는 태도 등 많은 것들을 느끼고 배울 수 있었던 시간이었습니다.',
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
    title: 'Blockchain Network',
    start: '2023-07',
    end: '2023-09',
    role: 'front-end development',
    responsibility: [
      '반응형 Web Publishing',
      'Next.js 프레임워크와 TypeScript를 활용한 프론트엔드 개발',
      'Zustand와 Axios를 활용한 상태 관리 및 데이터 처리',
      'React-Query를 활용한 데이터 캐싱 및 최적화',
      'Storybook을 활용한 컴포넌트 관리',
      'jwt를 활용한 엑세스 제어',
      '개발 환경 구축',
      'Git-flow 활용',
      '공통 컴포넌트 작성',
      '테스트 코드 작성',
      'RESTful API',
      'AWS Amplify 및 S3 활용',
      'BE3 / FE2',
    ],
    summary:
      '자체 발행 코인에 대한 환전, 출금, 그리고 패키지 상품 구매 등의 다양한 기능을 제공하고 그에 따른 보상을 받을 수 있는 B2C 서비스입니다.',
    major: [
      'Boilerplate 구축 등 프로젝트 세팅과 인프라 구축을 담당하였습니다.',
      '패키지 구매, 환전, 출금, 관리자 페이지 및 기능 등의 구현을 맡아 구현하였습니다.',
      'Next.js 프레임워크를 활용하여 페이지 라우터를 개발하고, 재사용 할 수 있는 공통 컴포넌트와 커스텀 훅을 구현하였습니다.',
      'TypeScript, Zustand, TailwindCSS, Axios, React-Query, React-Hook-Form, Zod 등의 툴을 사용하였습니다.',
      'Storybook을 활용하여 컴포넌트를 관리하였습니다.',
      'Git-flow 전략을 활용하여 버전 관리를 수행하였으며, 프로젝트의 효율적인 협업을 위해 협업을 위해 Slack, Jira, Figma, Teams 등의 각종 툴을 활용하였습니다.',
      'TailwindCSS를 활용하여 CSS 프레임워크를 적용하고, 스타일링을 담당하였습니다.',
      'RESTful API를 통해 데이터 통신을 관리하였고, AWS Amplify 및 S3를 활용하여 프로젝트 인프라를 구축하였습니다.',
      '이 프로젝트는 전 세계 사용자를 대상으로 하므로 i18next를 활용하여 다국어 처리를 구현하였습니다.',
    ],
    result: [
      '프로젝트의 팀원들과 원활한 협업을 통해 프로젝트 일정을 준수하고 목표를 달성하였습니다.',
      'TailwindCSS 및 기타 다양한 라이브러리와 유틸을 프로젝트에 적용하여, 프로젝트의 개발 및 배포를 성공적으로 완료하였습니다.',
      'Storybook을 활용하여 컴포넌트 개발 및 UI 요소들을 효과적으로 관리하고, UI 구축에 대한 효율성을 높였습니다.',
      '다국어 처리를 통해 전 세계 사용자들에게 최적화된 서비스를 제공하였습니다.',
      '다양한 관리자 기능들로 사용자와 관리자 간의 업무 흐름 효율성을 높일 수 있었습니다. ',
    ],
    precept: [
      'TailwindCSS를 이 프로젝트에서 처음으로 사용하게 되었는데, 처음에는 다소 복잡한 클래스 네임으로 인해 어려움을 겪었지만, 설정을 완료한 후에는 styled-components보다 상대적으로 쉽게 CSS 속성을 적용할 수 있다는 점을 깨달았습니다. 이 경험은 새로움과 동시에 설레는 기분을 주었습니다.',
      'Git을 사용하는 측면에서는 이전에 Pull Request를 올리는 측면에서만 경험했던 것과는 달리, 이번에는 Pull Request를 받고 Production에 merge하는 과정을 직접 수행하면서 저장소를 다루는 능력뿐만 아니라 전체적인 프로세스에 대한 시야가 확장되었다는 것을 느낄 수 있었습니다.',
      'Amplify를 적용하는 과정에서 도메인 구매 및 연결과 같은 초기 설정 단계에서 어려움을 겪었지만, 설정을 완료한 후에는 CI/CD를 원활하게 활용할 수 있어서 큰 만족감을 느낄 수 있었습니다.',
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
