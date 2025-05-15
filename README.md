# 위버 프론트엔드 과제

이 프로젝트는 Next.js를 사용하여 구현된 상품 목록 페이지입니다.

## 주요 기능

- 상품 목록 무한 스크롤
- 상품 검색
- 상품 정렬 (별점)
- 그리드/리스트 뷰 하루마다 랜덤 반영
- 반응형 디자인

## 실행 방법

1. 사용한 Node 버전

```bash
v18.20.7
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

3. 브라우저에서 http://localhost:3000 접속

## 스크립트

- `dev`: 개발 서버 실행 (Turbopack 사용)
- `lint`: ESLint 실행
- `format`: Prettier로 코드 포맷팅
- `format:check`: Prettier 포맷팅 검사

## 기술 스택

- Next.js 15.3.2
- React 19
- TypeScript
- Tailwind CSS
- @tanstack/react-query
- Prettier

## 라이브러리 선택 이유

### Tailwind CSS

- 유틸리티 기반의 CSS 프레임워크로 빠른 개발 가능
- `tailwind-merge`를 통한 클래스 충돌 방지

### @tanstack/react-query

- 서버 상태 관리에 최적화
- 캐싱, 재시도, 백그라운드 업데이트 등의 기능 제공
- 초기값과 stale time을 사용해 서버에서 받아온 data를 그대로 사용할 수 있ㅇ므

## Prettier 설정

코드 스타일 일관성을 위해 Prettier를 설정했습니다.

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "jsxSingleQuote": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

특히 `prettier-plugin-tailwindcss`를 사용하여 Tailwind CSS 클래스의 일관된 정렬을 보장합니다.

## 데이터 페칭 전략

### 서버 컴포넌트에서의 초기 데이터 로딩

- `page.tsx`에서 서버 컴포넌트를 통해 초기 데이터를 로드
- SEO 최적화 및 초기 로딩 성능 향상
- 사용자 경험 개선을 위한 초기 데이터 제공

### useInfiniteQuery 설정

```typescript
const { data, isLoading, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
  queryKey: productsQueryKey.search(query),
  queryFn: ({ pageParam = 1 }) => getProducts({ skip: pageParam * 20, limit: 20, ...query }),
  getNextPageParam: ({ total, skip, limit }) => {
    const isEnd = total <= skip + limit;
    if (isEnd === true) return undefined;
    return (skip + limit) / limit;
  },
  initialPageParam: 1,
  initialData: {
    pages: [initialProducts],
    pageParams: [1],
  },
  staleTime: 1000 * 60 * 1, // 1분
});
```

- `initialData`: 서버 컴포넌트에서 로드한 초기 데이터 활용
- `staleTime`: 1분으로 설정하여 불필요한 리페칭 방지
- `getNextPageParam`: 페이지네이션 로직 구현
- Intersection Observer를 통한 무한 스크롤 구현
