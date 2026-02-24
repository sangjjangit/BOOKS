# 01_React_Native_소개
- 페이스북이 개발한 오픈 소스 프레임워크

## 1. React Native 란 무엇인가?
### - 리액트 네이티브 시작하기
#### - 환경 설정
- Node.js
- 리액트 네이티브 CLI: `npm install -g react-native-cli`
- 안드로이드 스튜디오: 안드로이드 에뮬레이터
- 엑스코드: ios 시뮬레이터

#### - 새 프로젝트 만들기
- `npx react-native init MyProject01`
- 에러 발생: `npx react native init cli init is not a function`
- `npm uninstall -g react-native-cli` 후 `MyProject01` 폴더 삭제
- `npx react-native init MyProject01`
- 메시지 발생: Switch to `npx @react-native-community/cli init` for the identical behavior.
- `npx @react-native-community/cli init MyProject01`

#### - 애플리케이션 실행하기
- 프로젝트 폴더 이동: `cd MyProject01`
- 안드로이드: `npx react-native run-android`
- iOS: `npx react-native run-ios`

### - 리액트 네이티브 구성요소
#### - View: div와 유사한 동작
- import { View } from 'react-native'

#### - Text
- import { Text } from 'react-native'

#### - Image
- import { Image } from 'react-native'

#### - Button
- import { Button } from 'react-native'

#### - ScrollView
- import { ScrollView } from 'react-native'

### - 화면 간 내비게이션
#### - 리액트 네비게이션 설치
- `npm install @react-navigation/native`
- 특정 환경에 대한 의존성도 설치
- `npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

#### - 단순한 스택 네비게이터 만들기
- import { createStackNavigator } from '@react-navigation/stack'
- const Stack = createStackNavigator()
- NavigationContainer, Stack.Navigator, Stack.Screen 컴포넌트

### - 상태 관리 처리
#### - 리덕스
- 자바스크립트 애플리케이션을 위한 예측 가능한 상태 컨테이너
- 애플리케이션 상태를 중앙 위치에서 관리할 수 있어 이해와 디버깅이 용이
- `npm install redux react-redux`
- import { createStore } from 'redux'

#### - 컨텍스트 API
- 리액트의 내장 컨텍스트 API, 값들을 컴포넌트 간에 공유할 수 있게 해준다.
- import { createContext } from 'react'
- const MyContext = createContext()

### - 리액트 네이티브 애플리케이션 테스트하기
#### - 단위 테스트를 위한 Jest
- 리액트 네이티브 애플리케이션을 사전 구성된 테스트 프레임워크, 컴포넌트와 로직에 대한 단위 테스트 작성
- import { render } from '@testing-library/react-native'
- test('renders learn', () => {})

#### - E2E 테스트를 위한 Detox
- E2E 테스트 프레임워크, 실제 장치와 에뮬레이터에서 앱을 테스트
- `npm install detox --save-dev`

### - 성능 최적화
#### - 대규모 데이터 세트를 FlatList 사용
- ScrollView 사용하지 마세요.
- ScrollView 는 모든 항목을 한 번에 렌더링
- 항목을 지연 렌더링하는 FlatList 를 활용

#### - 이미지 최적화
- react-native-fast-image 와 같은 라이브러리 활용, 최적화된 이미지 로딩

#### - 메모이제이션 사용
- React.memo, useMemo, useCallback 을 활용, 컴포넌트 리렌더링을 피함으로서 성능 최적화

### - 리액트 네이티브를 사용할 때
#### - 크로스 플랫폼
- iOS, Android 모두 실행, 단일 코드베이스 접근 방식
#### - 신속한 프로토타이핑
#### - 기존 리액트 지식

### - 리액트 네이티브를 사용하지 말아야 할 때
#### - 성능이 중요한 애플리케이션
#### - 복잡한 UI 애니메이션
#### - 네이티브 API 통합 필요
- 서드파티 라이브러리를 많이 사용해야한다면, 네이티브 개발로 가는 것이 유리

---

## 2. 주요 기능 및 이점

---

## 3. 개발 환경 설정
### 필수 사항
### Node.js 및 npm
- Node.js: https://nodejs.org/
- node -v
- npm -v

### 리액트 네이티브 CLI vs Expo
- 개발에 두가지 방법

### 리액트 네이티브 CLI 설정
- `npx @react-native-community/cli init MyProject01`

### Expo 설정
- `npx create-expo-app MyProject01`

### 안드로이드 개발 환경 설정
- https://developer.android.com/studio
- 안드로이드 스튜디오 실행, 설치
- 안드로이드: `npx react-native run-android`
- iOS 는 Mac 필요.
- iOS: `npx react-native run-ios`

---

## 4. React Native 아키텍처 이해
### 리액트 네이티브 소개
### 리액트 네이티브 아키텍처의 핵심 컴포넌트
#### 자바스크립트 스레드
- 비즈니스 로직을 관리, 리액트 컴포넌트를 렌더링하는 역할
- UI 컴포넌트 렌더링
- 상태 및 속성 관리
- 이벤트 처리

#### Native 모듈
- 내장 모듈
- 커스텀 모듈
- 콜백 및 프로미스

#### 브리지
- 중개자, 자바스크립트 측과 네이티브 측 간의 통신을 촉진
- 직렬화
- 양방향 통신
- 메시지 큐

#### UI 스레드
- 컴포넌트 렌더링
- UI 업데이트
- 이벤트 처리

### 리액트 네이티브 작동 방식
- 사용자 상호작용
- JS 스레드
- 브리지 통신
- 네이티브 처리
- UI 업데이트
- 다시 렌더링

---

## 5. 다른 프레임워크와의 비교
### 소개
### 리액트 네이티브 개요
### 비교 프레임워크 개요
#### 플러터(Flutter)
- 구글 개발 오픈 소스 UI 툴킷
- 다트

#### 자마린(Xamarin)
- 마이크로소프트, C#을 사용하여 개발

#### 아이오닉(Ionic)
- HTML5, CSS 및 자바스크립트를 활용하는 오픈 소스 모바일 UI 툴킷, 앵귤러 위에 구축

#### 네이티브스크립트(NativeScript)




