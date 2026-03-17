/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "지현호",
    nameEn: "Groom",
    father: "지영일",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "오지민",
    nameEn: "Bride",
    father: "오영모",
    mother: "최경희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-27",
    time: "12:00",
    venue: "아산터미널웨딩홀",
    hall: "8층",
    address: "충청남도 아산시 번영로 225",
    tel: "041-544-9881",
    mapLinks: {
      kakao: "https://place.map.kakao.com/22212107",
      naver: "https://naver.me/F6xgNnMq"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "고교 시절 친구로 만나,\n오랜 시간 변함없이 서로를 지켜오며.\n마침내 하나 도디어 부부의 연을 맺으려 합니다.\n따뜻한 마음으로 저희의 첫걸음을\n지켜봐주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "지현호", bank: "신한은행", number: "110-529-567925" },
      { role: "아버지", name: "지영일", bank: "신한은행", number: "110-497-078545" },
    ],
    bride: [
      { role: "신부", name: "오지민", bank: "농협은행", number: "312-0139-432121" },
      { role: "아버지", name: "오영모", bank: "신한은행", number: "110-113-121120" },
      { role: "어머니", name: "최경희", bank: "기업은행", number: "507-003001-01-014" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지현호 ♥ 오지민 결혼합니다",
    description: "2026년 6월 27일, 소중한 분들을 초대합니다."
  }
};
