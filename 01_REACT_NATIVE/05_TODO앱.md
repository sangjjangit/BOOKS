# 05_TODO앱


## 5.1 프로젝트 준비하기

## 5.2 타이틀 만들기
- SafeAreaView 컴포넌트: https://reactnative.dev/docs/safeareaview
- StatusBar 컴포넌트: https://reactnative.dev/docs/statusbar

## 5.3 Input 컴포넌트 만들기
- Dimensions: https://reactnative.dev/docs/dimensions
- useWindowDimensions: https://reactnative.dev/docs/useWindowDimensions
- Dimensions는 처음 값을 받을 때의 크기로 고정되며, 기기를 회전, 전환이 되면, 변화된 화면의 크기와 일치하지 않다. 그러므로 이벤트 리스터를 등록하여 화면 크기 변화 대응할 수 있도록 기능을 제공.
- useWindowDimensions는 리액트 네이티브에서 제공하는 Hooks 중 하나로, 화면의 크기가 변경되면 화면의 크기, 너비, 높이를 자동으로 업데이트

- 속성
    - autoCapitalize: 자동 대문자 전환 설정(none)
    - autoCorrect: 자동 수정 기능 설정(false)
    - returnKeyType: 키보드 완료 버튼 설정(done, next)

## 5.4 할 일 목록 만들기
- 이미지 준비
- 구글 머티리얼 디자인 아이콘: https://material.io/resources/icons/?style=baseline
- IconButton 컴포넌트: https://reactnative.dev/docs/image
- Task 컴포넌트

## 5.5 기능 구현
- 추가
- 삭제
- 완료
- 수정
- 입력취소

## 5.6 부가 기능
- 데이터 저장하기: AsyncStorage 이용, 로컬 데이터 저장, 키-값(key-value)형태
- async-storage: https://github.com/react-native-community/async-storage
- npm install @react-native-async-storage/async-storage
- yarn add @react-native-async-storage/async-storage
- npx expo install @react-native-async-storage/async-storage

- 데이터 불러오기
- `import { AppLoading } from expo`: 디플리케이트됨.
- `SplashScreen` 으로 대체

- 로딩 화면과 아이콘
- app.json

- 기타
https://flatuicolors.com
https://coolors.co
https://paletton.com

