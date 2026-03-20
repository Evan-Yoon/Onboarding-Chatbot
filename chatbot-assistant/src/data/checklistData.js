const checklistData = [
  {
    id: "day1",
    key: "firstDay",
    title: "입사 첫날",
    shortLabel: "첫날",
    isDummy: true,
    items: [
      {
        id: "d1-1",
        title: "[더미 데이터] HR 오리엔테이션 참석",
        description: "입사 절차 및 기본 근무제도를 안내받습니다.",
        completed: true,
      },
      {
        id: "d1-2",
        title: "[더미 데이터] 근로계약 및 필수 서류 제출 확인",
        description: "신분증, 통장 사본, 필수 제출 서류를 등록합니다.",
        completed: true,
      },
      {
        id: "d1-3",
        title: "[더미 데이터] 사원증 발급 절차 안내받기",
        description: "사원증 사진 등록 및 발급 일정을 확인합니다.",
        completed: false,
      },
      {
        id: "d1-4",
        title: "[더미 데이터] 노트북 및 업무 장비 수령",
        description: "업무용 장비와 계정 정보를 전달받습니다.",
        completed: false,
      },
      {
        id: "d1-5",
        title: "[더미 데이터] 이메일/협업툴 계정 로그인 확인",
        description: "메일, 메신저, 문서 협업툴 접속을 완료합니다.",
        completed: false,
      },
    ],
  },
  {
    id: "week1",
    key: "firstWeek",
    title: "입사 첫 주",
    shortLabel: "첫주",
    isDummy: true,
    items: [
      {
        id: "w1-1",
        title: "[더미 데이터] 부서별 업무 프로세스 안내 받기",
        description: "팀 운영 방식과 협업 흐름을 이해합니다.",
        completed: false,
      },
      {
        id: "w1-2",
        title: "[더미 데이터] 유연근무제 운영 방식 숙지",
        description: "07시~10시 출근, 8시간 근무 기준을 확인합니다.",
        completed: false,
      },
      {
        id: "w1-3",
        title: "[더미 데이터] 연차/휴가 신청 절차 확인",
        description: "휴가 정책과 신청 경로를 숙지합니다.",
        completed: false,
      },
      {
        id: "w1-4",
        title: "[더미 데이터] 비품/총무 요청 채널 확인",
        description: "업무용 소모품과 비품 요청 방법을 확인합니다.",
        completed: false,
      },
      {
        id: "w1-5",
        title: "[더미 데이터] 필수 보안 및 컴플라이언스 교육 이수",
        description: "사내 필수 교육을 이수합니다.",
        completed: false,
      },
    ],
  },
  {
    id: "month1",
    key: "firstMonth",
    title: "입사 첫 달",
    shortLabel: "첫달",
    isDummy: true,
    items: [
      {
        id: "m1-1",
        title: "[더미 데이터] 1:1 온보딩 리뷰 진행",
        description: "입사 후 적응 상태와 지원 필요사항을 공유합니다.",
        completed: false,
      },
      {
        id: "m1-2",
        title: "[더미 데이터] 업무 적응도 및 추가 지원 필요사항 공유",
        description: "실무 적응 관련 피드백을 전달합니다.",
        completed: false,
      },
      {
        id: "m1-3",
        title: "[더미 데이터] 교육 참여 현황 점검",
        description: "필수/선택 교육 진행 상황을 확인합니다.",
        completed: false,
      },
      {
        id: "m1-4",
        title: "[더미 데이터] 협업툴/업무 시스템 사용 숙련도 점검",
        description: "업무 도구 활용 수준을 체크합니다.",
        completed: false,
      },
      {
        id: "m1-5",
        title: "[더미 데이터] 조직문화 및 복리후생 만족도 체크",
        description: "초기 조직 적응 경험을 확인합니다.",
        completed: false,
      },
    ],
  },
];

export default checklistData;
