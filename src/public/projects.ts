interface IProjects {
  [name: string]: {
    id: number;
    title: string;
    start: string | Date;
    end: string | Date;
    role: string;
    responsibility: string;
    url?: string;
    summary: string;
    description: string[];
    images?: string[];
  };
}

export const projects: IProjects = {
  kworks: {
    id: 1,
    title: 'GIS 공간 정보 시스템',
    start: '2020-04',
    end: '2022-05',
    role: 'full stack development',
    responsibility: 'server setup, database setup, eGov framework setup and overall application development.',
    summary:
      '지방자치단체 및 공공 기관에서 유의미한 공간 정보를 간단하고 효과적으로 활용하기 위한 시스템으로 비용 절감 및 업무 효율 향상을 목적으로 하는 B2B 프로젝트입니다.',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다.',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
    images: [
      'image_projects_1_1.jpg',
      'image_projects_1_2.jpg',
      'image_projects_1_3.png',
      'image_projects_1_4.jpg',
      'image_projects_1_5.jpg',
    ],
  },
  defi: {
    id: 2,
    title: 'Defi Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary:
      'ERC20 표준 확장 암호 화폐를 예치하여 상품 타입(고정형/가변형)에 따라 보상으로 지급되는 보상 토큰을 받는 방식으로 작동. 또한 외부 토큰을 확장 토큰으로 교환 하여 사용할 수 있게 하는 교환소 또한 구현',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
    images: ['image_projects_2_1.png', 'image_projects_2_2.png', 'image_projects_2_3.png'],
  },
  nftMarket: {
    id: 3,
    title: 'NFT Market Project',
    start: '2022-05',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary:
      '이더리움 폴리곤용 솔루션을 기반으로 직접 또는 경매를 통해 대체 불가능한 토큰을 판매할 수 있는 시장을 제공',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
    images: ['image_projects_3_1.png', 'image_projects_3_2.png'],
  },
  exchange: {
    id: 4,
    title: 'Exchange Project',
    start: '2022-06',
    end: '2022-07',
    role: 'front-end development',
    responsibility: 'react.js application development, AWS infrastructure construction',
    summary: '현물, 파생 상품과 소셜 암호화 트레이딩을 제안하는 암호화 거래 플랫폼',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
  },
  recruit: {
    id: 5,
    title: 'Recruit Web Mobile Migration Project',
    start: '2022-09',
    end: '2022-10',
    role: 'front-end development',
    responsibility: 'next.js application development, AWS infrastructure construction',
    summary: '구인/구직 채용 중개 플랫폼 마이그레이션 프로젝트',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
    images: ['image_projects_5_1.png', 'image_projects_5_2.png'],
  },
  fileup: {
    id: 6,
    title: 'fileup',
    start: '2023-07',
    end: '2023-09',
    role: 'front-end development',
    responsibility: 'next.js application development, AWS infrastructure construction',
    summary: '구인/구직 채용 중개 플랫폼 마이그레이션 프로젝트',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
    images: ['image_projects_5_1.png', 'image_projects_5_2.png'],
  },
};
