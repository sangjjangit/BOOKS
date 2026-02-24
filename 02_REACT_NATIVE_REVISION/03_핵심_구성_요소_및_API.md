# 03_핵심_구성_요소_및_API

## 1. View 및 Text 구성 요소
### View 구성요소 개요
- div 와 유사, 레이아웃

### Text 구성요소 개요
- 텍스트 표시에 필수적

### View 및 Text 구성요소 결합하기
### View 레이아웃 전략
#### Flexbox 레이아웃
- Flex 방향: flexDirection: 기본 축(행,열) 제어
- 아이템 정렬: alignItems, justifyContent

#### 절대 위치 지정
- position 속성

### 고급 Text 스타일링
- 사용자 정의 글꼴
- 응답형 텍스트: react-native-responsive-screen 라이브러리 사용으로 반응형 글꼴 크기 가능
- 다중 줄 텍스트: numberOfLines, ellipsizeMode 속성

### View 및 Text 구성요소의 접근성
- 접근성 속성: accessibilityLabel, accessibilityHint 및 기타 속성
- 접근성 역할

---

## 2. Image 및 ScrollView 구성 요소
### React Native 컴포넌트 개요
### 이미지 컴포넌트
- 소스 속성: source 속성
- 원격 이미지, 로컬 이미지, 정적 리소스를 표시할 수 있다.

#### 이미지 크기 조정
- cover:  이미지 비율 유지, 확대, 컨테이너를 채우지면 이미지 잘림
- contain: 컨테이너 안에 맞게 확장
- stretch: 비율 유지하지 않고 컨테이너 채움.

#### 이미지 캐싱
- react-native-fast-image 라이브러리 활용

#### 이미지 스타일
#### 이미지 이벤트 처리
- Image 컴포넌트는 onLoad, onLoadEnd, onError 등 이벤트 지원

### ScrollView 컴포넌트
- 수평/수직 스크롤: 기본 수직, horizontal 속성(true:수평)
- 스크롤 성능: FlatList 활용

### 이미지와 ScrollView 결합하기
### 최선의 사례
- 성능 최적화: FlatList 활용
- 이미지 캐싱: 이미지 캐싱 라이브러리 활용
- 반응형 디자인: flex 속성, Dimensions API 활용
- 사용자 경험
- 접근성

---

## 3. 터치 가능한 요소 및 제스처 처리
### 터치 가능한 컴포넌트 종료
#### TouchableHighlight
- 버튼을 눌렀을 때 감싸진 뷰를 어룹게 하여 시각적 피드백을 제공

#### TouchableOpacity
- 눌렸을 때 감싸진 요소에 페이드 효과

#### TouchableWithoutFeedback
- 아무런 시각적 피드백 없이 자식 컴포넌트를 감싼다.
- 요소의 외관을 변경하지 않고 터치를 처리하고자 할때

#### Pressable
- 눌렸을 때, 누리기 해제, 길게 누르기 포함, 풍부한 상호작용에 유리

### 제스처 처리 라이브러리
- `npm install --save react-native-gesture-handler`

### 제스처 리스폰더 시스템을 통한 터치 처리
- onStartShouldSetResponder: 터치시, 뷰가 리스폰더가 되어야 하는지 결정
- onMoveShouldSetResponder: 터치 이동시, 뷰가 리스폰더가 되어야 하는지 결정
- onResponderGrant: 뷰가 리스폰더 호출시
- onResponderMove: 가로질러 이동시
- onResponderRelease: 제스처 해제시

### 사용자 정의 제스처 인식기 구현하기

---

## 4. React Native 의 Flexbox 레이아웃
### 플렉스박스란 무엇인가?
### 플렉스박스의 핵심개념
### 플렉스박스 속성 이해하기
#### 컨테이너 속성
- display: 'flex'
- 플렉스 방향: flexDirection: row, column, row-reverse, column-reverse
- justifyContent: flex-start, flex-end, center, space-between, space-around
- alignItems: flex-start, flex-end, center, baseline, stretch
- flexWrap: nowrap, wrap, wrap-reverse

---

## 5. SafeAreaView 구성 요소 사용
### SafeAreaView란 무엇인가요?
- 상태 표시줄, 내비게이션 바, 하드웨어 기능에 의해 가려지지 않을 것이라고 보장된 화면 부분을 의미

### 왜 SafeAreaView를 사용해야 할까요?
- `npm install react-native-safe-area-context`