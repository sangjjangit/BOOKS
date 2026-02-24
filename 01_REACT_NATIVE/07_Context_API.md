# 07_Context API
- 데이터를 전역적으로 관리하고 사용할 수 있도록 하는 기능

## 7.1 전역 상태 관리
- 데이터는 부모 컴포넌트에서 자식 컴포넌트로 전달
- 최상위 컴포넌트에서 상태를 관리하여 하위 컴포넌트 어디서 필요로 하든 전달 해야 한다.
- 데이터를 필요로 하는 컴포넌트까지 props 를 통해 값을 전달 사용
- 자식 컴포넌트에서는 부모로부터 받은 데이터를 변경할 수 없으므로, 역순으로 부모 컴포넌트에 데이터 변경 요청 전달.
- 유지보수 불편
- Context API를 이용하면 Context를 생성해 필요한 컴포넌트에서 데이터를 바로 받아 온다.

## 7.2 Context API
- `const Context = createContext(defaultValue)`
- Consumer 컴포넌트: 가장 가까운 Provider 컴포넌트의 value 값이 전달된다.
- Provider 컴포넌트: value 속성 필수
- Provider 컴포넌트를 이용해 데이터를 전달하고, Consumer 컴포넌트를 이용해 내용을 출력.
- Context 값 수정

## 7.3 useContext

