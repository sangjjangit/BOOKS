# 02_React_Native_시작

## 1. 새로운 React Native 프로젝트 만들기
#### 리액트 네이티브 CLI
npx @react-native-community/cli init my-app
cd my-app
npm run ios | npx react-native run-android
npm run android | npx react-native run-ios

#### Expo CLI
npx create-expo-app my-app
cd my-app
npx expo start

### 프로젝트 구조
#### 디렉토리 및 파일 개요
- node_modules
- android
- ios
- App.js: 진입점
- package.json: 프로젝트 의존성
- babel.config.js: Babel 설정

### 개발 환경 구성하기
#### 환경 변수 설정
.env 파일을 사용하여 환경 구성 관리

#### ESLint 및 Prettier 구성하기
- 코드 품질 유지
- `npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier`

#### 내비게이션 설정하기
- `npm install @react-navigation/native @react-navigation/stack`

### 앱 사용자화하기
#### 함수형 컴포넌 및 훅 사용하기
#### 스타일링
#### 상태관리
#### 데이터 가져오기

### 애플리케이션 테스트하기
#### 단위 테스트
#### UI 테스트

### 배포를 위한 빌드
#### 리액트 네이티브 CLI 경우
- 안드로이드
- cd android
- gradlew assembleRelease
- iOS
- Xcode: Product > Archive 선택

#### Expo 경우
- expo build:android
- expo build:ios

---

## 2. 디렉토리 구조 및 파일 구성
### 디렉토리 구조의 중요성
- 확장성
- 유지 보수성
- 협업

### 시작 지점: React Native 앱 생성
### 핵심 디렉토리
- android
- ios
- src/components: 재사용 가능한 리액트 컴포넌트
- src/screens: 컨테이너 또는 화면
- src/navigation: 내비게이션 및 라우팅 관리
- src/assets: 정적 파일 저장
- src/redux or src/store: 상태 관리
- src/utils: 유틸리티 함수 및 헬퍼
- src/config: 구성 설정 및 상수 저장

### 파일 명명 규칙
- 컴포넌트 파일은 카멜 표기법
- 스크립트 파일은 스네이크 표기법
- 스타일 파일은 .styles.js
- 테스트 파일은 .test.js

### 추가 모범 사례
#### 별도의 기능 모듈 사용
- 기능별 모듈화
- 단일 components 디렉토리를 사용하는 대신 기능을 캡슐화
- auth, profile 디렉토리

#### 인덱스 파일 사용
- // index.js
- import Button from './Button'
- import Header from './Header'
- export { Button, Header }

#### 문서화
- README.md 포함, 컴포넌트 목적 사용법 설명

---

## 3. 첫 번째 앱 실행
- 위 내용과 상동

---

## 4. 구성 요소 및 JSX 이해
### 컴포넌트란 무엇인가요?
#### 컴포넌트의 종류
- 함수형 컴포넌트: JSX를 반환하는 자바스크립트 함수
- 클래스형 컴포넌트: 자체 상태나 라이프사이클 메서드를 가진 컴포넌트, React.Component 를 확장하고 render() 메서드를 가진다.

```
class Greeting extends React.Component {
  render() {
    return <Text>hi</Text>
  }
}
```

#### 함수형 컴포넌트 만들기
#### 클래스형 컴포넌트 만들기
#### 클래스형 컴포넌트의 라이프사이클 메서드
- 자체 상태나 라이프사이클 메서드를 가진 컴포넌트
- componentDidMount(): 컴포넌트가 DOM 에 추가된 후
- componentDidUpdate(): 컴포넌트의 업데이트가 발생할 때
- componentWillUnmount(): 컴포넌트가 취소될때

### JSX 란 무엇인가요?
- 자바스크립트 XML 의 줄임말

#### JSX 구문
- `const element = <h1>hello world!</h1>`

#### JSX 표현식 포함하기
- `const name = 'User'`
- `const greeting = <Text>hello {name}!</Text>`

#### JSX 자바스크립트 객체로 변환하기
- `const element = <h1>hello world!</h1>`
- `const element = React.createElement('h1', null, 'hello world!')`

### 컴포넌트 및 JSX 사용의 이점
### 컴포넌트 및 JSX 대한 모범 사례

---

## 5. React Native 스타일 지정
### 리액트 네이티브의 스타일 이해하기
- 스타일 속성은 CSS와 유사하지만 하이픈 대신 카멜 케이스를 사용

#### 일반 스타일 속성
- 플렉스박스 스타일: flex, flexDirection, justifyContent, alignItems 등
- 레이아웃 스타일: position, top, bottom, left, right, margin, padding 등
- 텍스트 스타일: fontSize, fontWeight, color, textAlign 등
- 배경 스타일: backgroundColor, opacity 등
- 테두리 스타일: borderWidth, borderColor, borderRadius 등

### 스타일 시트를 사용하기
#### 스타일 시트 만들기
- `StyleSheet.create({})` 사용하여 생성

#### 성능 최적화
- `StyleSheet.create({})` 캐시함

#### 조건부 스타일을 위한 스타일 시트 사용하기

### 레이아웃을 위한 플렉스박스
#### 플렉스박스 속성
- flexDirection
- justifyContent
- alignItems

### 컴포넌트 스타일링
#### 컴포넌트 스타일 지정

### 반응형 디자인
#### 치수 API
- Dimensions API: `import { Dimensions } from 'react-native'`

#### 반응형 단위
- 퍼센트와 flex 단위를 사용

#### 반응형 디자인을 위한 라이브러리 사용하기
- https://github.com/horusreact/react-native-responsive-screen
- https://github.com/callstack/react-native-paper

### 스타일링을 위한 Native 모듈 사용하기
### 애니메이션과 전환
- Animated API: `import { Animated } from 'react-native'`

### 리액트 네이티브에서의 테마
#### 테마 구현하기
- ThemeProvider 생성, 중앙에서 스타일을 관리하여 모든 컴포넌트에 사용

#### 테마 접근하기

### 리액트 네이티브에서 스타일링을 위한 모범 사례
- 성능을 위한 스타일 시트 사용하기
- 스타일을 모듈화하기
- 플렉스박스 레이아웃 활용하기
- 다자인 시스템 만들기
- 다양한 장치에서 테스트하기










