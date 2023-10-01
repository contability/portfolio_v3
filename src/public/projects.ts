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
  };
}

export const projects: IProjects = {
  kworks: {
    id: 1,
    title: 'GIS 공간 정보 시스템',
    start: '2020-04',
    end: '2022-05',
    role: 'full stack development',
    responsibility: 'server setup, database setup, framework setup and overall application development.',
    summary:
      '지방자치단체 및 공공 기관에서 유의미한 공간 정보를 간단하고 효과적으로 활용하기 위한 시스템으로 비용 절감 및 업무 효율 향상을 목적으로 하는 B2B 프로젝트입니다.',
    description: [
      '도로, 상수, 하수, 공원 등등 해당 기관에서 관리하는 모든 공간 정보를 지도로 표현하고 조회 및 수정, 삭제할 수 있도록 구현되었습니다.',
      '전자 정부 프레임워크를 활용하여 개발 되었으며 데이터 갱신 batch 프로그램의 경우 spring boot로 구현하였습니다.',
      '데이터베이스는 해당 기관의 서버 상태, 계약과 같은 여러 상황에 따라 Oracle, MySQL, postgreSQL 등 여러가지 데이터베이스를 다루었습니다.',
      '클라이언트는 jQuery가 사용되었고 기본적으로 REST API 방식으로 통신이 이루어졌으며 일부 외부 연계 데이터 서버와는 SOAP API 방식으로 통신하였습니다',
      '주요 사용 기술로는 맵 표현 및 조작을 위한 openLayers, 통계와 같은 보고용 리포팅 툴 clipReport, 일부 UI에서는 easyUI 가 사용되었습니다.',
      '직접 서버 및 데이터베이스 등 인프라를 구축하는 On-Premise 방식으로 운영 하였습니다.',
    ],
  },
};
