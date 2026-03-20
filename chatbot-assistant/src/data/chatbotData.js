const chatbotData = {
  faq: [
    {
      id: "faq-1",
      question: "출근 시간은 어떻게 되나요?",
      answer:
        "근무시간은 07시~10시 사이 자율 출근이며, 8시간 근무 후 개인별로 퇴근합니다.",
    },
    {
      id: "faq-2",
      question: "유연근무제는 어떻게 운영되나요?",
      answer:
        "07시~10시 사이에 출근 후, 8시간 근무를 채우면 자유롭게 퇴근 가능합니다.",
    },
    {
      id: "faq-3",
      question: "연차는 어떻게 사용하나요?",
      answer:
        "[더미 데이터] 사내 HR 시스템을 통해 신청하며, 팀장 승인 후 사용 가능합니다.",
    },
    {
      id: "faq-4",
      question: "복리후생에는 무엇이 있나요?",
      answer:
        "건강검진비 지원, 자녀학자금, 차량 할인, 휴양시설, 명절 선물 등 다양한 복지가 제공됩니다.",
    },
    {
      id: "faq-5",
      question: "비품은 어떻게 요청하나요?",
      answer:
        "[더미 데이터] 사내 그룹웨어 또는 총무팀 요청 채널을 통해 신청 가능합니다.",
    },
  ],

  rules: [
    {
      id: "rule-1",
      keyword: "근무시간",
      content:
        "07시~10시 사이 자율 출근, 8시간 근무 후 개인별 퇴근 (유연근무제)",
    },
    {
      id: "rule-2",
      keyword: "인사제도",
      content: "4급(3년) → 3급(7년) → 2급 승진 체계",
    },
    {
      id: "rule-3",
      keyword: "복리후생",
      content: "건강검진비, 자녀학자금, 차량 할인, 휴양시설, 동호회 지원 등",
    },
    {
      id: "rule-4",
      keyword: "휴가",
      content: "주 5일 근무, 경조휴가, 2주 휴가제, 징검다리 단체휴무",
    },
    {
      id: "rule-5",
      keyword: "교육",
      content: "사내어학, 직무교육, 해외연수, 리더십 교육 등 제공",
    },
  ],

  suggestions: [
    {
      id: "suggest-1",
      text: "출근 시간 알려줘",
    },
    {
      id: "suggest-2",
      text: "연차는 언제 발생해?",
    },
    {
      id: "suggest-3",
      text: "복지 뭐 있어?",
    },
    {
      id: "suggest-4",
      text: "비품 요청 방법 알려줘",
    },
    {
      id: "suggest-5",
      text: "유연근무 설명해줘",
    },
  ],
};

export default chatbotData;
