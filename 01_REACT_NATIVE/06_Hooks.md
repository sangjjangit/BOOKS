# 06_Hooks
- 컴포넌트에서 상태를 관리하는 방법??

## 6.1 useState
- 상태 관리
- `const [state, setState] = useState(initialState)`
- `setState(prevState = > {})`: 이전상태값으로 값 변경
- 비동기 동작

## 6.2 useEffect
- 컴포넌트가 랜더링될 때마다 원하는 작업이 실행되도록 설정할 수 있는 기능
- `useEffect(() => {}, [])`
- 특정 조건에서 실행하기: 마지막 파라미터(배열)에 변수 전달
- 마운트될 때 실행하기: 마지막 파라미터(배열)에 빈 배열 전달
- 언마운트될 때 실행하기: useEffect 함수의 return

## 6.3 useRef
- 특정 컴포넌트를 선택해야 하는 경우
- `const ref = useRef(initialValue)`
- `initialValue` 설정하면, `.current` 프로퍼티에 값을 담는다.
- useRef의 내용이 변경되어도 컴포넌트는 다시 랜더링되지 않는다.

## 6.4 useMemo
- 동일한 연산의 반복 수행을 제거해서 성능을 최적화하는데 사용
- `useMemo(() => {}, [])`
- 중복된 연산 방지

## 6.5 커스텀 Hooks 만들기
