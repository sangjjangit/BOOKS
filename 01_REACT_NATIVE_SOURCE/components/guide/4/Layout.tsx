import { StyleSheet, Text, View } from "react-native"

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}
export const Contents = () => {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
      <Text style={styles.text}>flex 와 범위</Text>
      <Text style={styles.text}>정렬</Text>
      - flexDirection <br/>
      - column: 세로 정렬(기본값) <br/>
      - column-reverse: 세로 역순 정렬 <br/>
      - row: 가로 정렬 <br/>
      - row-reverse: 가로 역순 정렬 <br/>
 <br/>
      - justifyContent: flexDirection에서 결정한 방향과 동일한 방향으로 정렬 <br/>
      - alignItems: flexDirection에서 결정한 방향과 수직인 방향으로 정렬 <br/>
 <br/>
      - flexDirection이 row 일 때, justifyContent의 값에 따라 정렬하는 모습 <br/>
      - flex-start: 시작점부터 정렬(기본값) <br/>
      - flex-end: 끝에서부터 정렬 <br/>
      - center: 중앙 절렬 <br/>
      - space-between: 컴포넌트 사이의 공간을 동일하게 정렬 <br/>
      - space-around: 컴포넌트 각각의 주변 공간을 동일하게 정렬 <br/>
      - space-evenly: 컴포넌트 사이와 양 끝에 동일한 공간으로 정렬 <br/>
 <br/>
      - flexDirection이 row 일 때, alignItems의 값에 따라 정렬하는 모습 <br/>
      - flex-start: 시작점부터 정렬(기본값) <br/>
      - flex-end: 끝에서부터 정렬 <br/>
      - center: 중앙 절렬 <br/>
      - stretch: alignItems의 방향으로 컴포넌트 확장(공간채움) <br/>
      - baseline: 컴포넌트 내부의 텍스트(text) 베이스라인(baseline)을 기준으로 정렬 <br/>
    </View>
  )
}
export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  header: {
    // flex: 1,
    backgroundColor: '#f1c40f',
  },
  contents: {
    flex: 1,
    backgroundColor: '#1abc0c',
    height: 640
  },
  footer: {
    // flex: 1,
    backgroundColor: '#3498db',
    height: 26
  },
  text: {
    fontSize: 26,
  },
})