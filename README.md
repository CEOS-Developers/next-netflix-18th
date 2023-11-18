# 6주차 미션: Next-Netflix

## 서론

안녕하세요, 프론트 운영진 **노수진**입니다 😸

이번주는 저번주 과제를 이어 Netflix를 완성해봅시다. 이번주 과제의 목표는 지난주에 이어 figma로 주어지는 디자인을 사용해 스타일링을 하는 방법과 SSR에 익숙해지는 것입니다. 추가적으로 성능 최적화 방법에 대해서도 생각해보는 것도 좋을 것 같습니다.

이번주도 화이팅입니다💪

## 미션

### 미션 목표

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.

### 기한

- 2023년 11월 17일 (기한 엄수)

### 필수 요건

- [결과화면](https://next-netflix-17th-sepia.vercel.app/)의 상세 페이지와 검색 페이지를 구현합니다.
    - 상세 페이지는 동적 라우팅을 이용해 구현합니다.
    - 검색 페이지는 실시간 키워드 검색으로 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- **SSR**을 적용해서 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))

### 선택 사항

- 검색 페이지 무한스크롤을 구현합니다.
- 검색 페이지 스켈레톤 컴포넌트를 구현합니다.
- 성능 최적화를 위한 방법을 적용해봅니다.
  
## **Key Question**

- 정적 라우팅(Static Routing)/동적 라우팅(Dynamic Routing)이란?
- 성능 최적화를 위해 사용한 방법

## 링크 및 참고자료

- [useCallback과 React.Memo를 이용한 렌더링 최적화](https://velog.io/@yejinh/useCallback%EA%B3%BC-React.Memo%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94)
- [성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
- [더 나은 UX를 위한 스켈레톤 UI 만들기](https://ui.toast.com/weekly-pick/ko_20201110)
- [React에서 무한 스크롤 구현하기](https://tech.kakaoenterprise.com/149)

# PR멘트

## Key Question

### SSR과 CSR의 차이
SSR은 서버 쪽에서 렌더링 준비를 마친 상태에서 클라이언트에게 전달하는 방식이고, 반대로 CSR은 서버에서 요청을 받아 클라이언트로 파일을 보내면 클라이언트 측에서 렌더링을 시작하는 방식이다.
웹페이지 로딩 시간에 있어서 성능차이가 있는데, SSR이 상대적으로 첫 페이지를 로딩하는 시간이 빠르고 나머지 페이지를 로딩하는 시간이 더 느리다 (첫페이지 로딩 과정을 반복하기 때문)
이전 과제까지 사용한 React에서는 라우팅을 통해 CSR을 사용했고, 이번 NextJS에서는 app 폴더 내 url pathname에 맞춘 폴더를 만들어 SSR을 사용했는데 확실히 클라이언트 쪽에서 라우팅 처리를 하지 않아도 되니 작업하는데는 편했지만 페이지 전환 시 로딩 시간이 길어지는 느낌이 있었다.

### SEO
SEO(Search Engine Optimization)는 Search Engine, 구글과 같은 검색엔진에 친화적인 사이트를 만들어 검색 결과의  트래픽 양과 질을 극대화하는 작업이다. 검색엔진은 크롤링을 통해 웹사이트를 읽는데 동적으로 컨텐츠가 생성되는 CSR에 비해 SSR은 애초에 서버사이드에서 컴파일되어 클라이언트로 넘어와서 크롤러 대응에 용이하다

### 협업과정
파트 분리와 gitflow에 기반해 협업하고자 했다. 팀 레포에서 Header,NavBar,Landing, ControlBar / MovieList, api, Slide 로 나누어 각 기능별 브랜치를 파서 구현 후 PR을 올려 merge했다
특정 기능이 완료되어야 이후 작업을 할 수 있는게 있어서 초기세팅과 api연동, 마크업은 분리해서 계획을 짜는 게 좋을 것 같다~!
