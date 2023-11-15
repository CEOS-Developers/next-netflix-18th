//한글 검색시 초성검색도 허용
const CHO_HANGUL: string[] = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const HANGUL_START_CHARCODE: number = "가".charCodeAt(0);

const CHO_INTERVAL: number = Math.floor(
  "까".charCodeAt(0) - "가".charCodeAt(0),
);
const JUNG_INTERVAL: number = Math.floor(
  "개".charCodeAt(0) - "가".charCodeAt(0),
);

function combineHangul(cho: number, jung: number, jong: number): string {
  return String.fromCharCode(
    HANGUL_START_CHARCODE + cho * CHO_INTERVAL + jung * JUNG_INTERVAL + jong,
  );
}

function createChosungRegex(search: string = ""): RegExp {
  const regexPattern: string = CHO_HANGUL.reduce(
    (acc: string, cho: string, index: number) =>
      acc.replace(
        new RegExp(cho, "g"),
        `[${combineHangul(index, 0, 0)}-${combineHangul(index + 1, 0, -1)}]`,
      ),
    search,
  );

  return new RegExp(`(${regexPattern})`, "g");
}

export function includesChosung(target: string, query: string): boolean {
  if (!query) return true;
  if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(query)) {
    return createChosungRegex(query).test(target);
  } else {
    return target.toLowerCase().includes(query.toLowerCase());
  }
}
