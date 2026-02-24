import { textStyle, viewStyle } from "@/styles/4/style"
import { StyleSheet, Text, View } from "react-native"

const StyleScreen = () => {
  return (
    <View style={viewStyle.container}>
      <Text>React Native Style</Text>
      - 인라인 스타일링: 컴포넌트에 직접 스타일을 입력하는 방식
      <Text style={{
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black'
      }}>Inline Styling - Text</Text>
      <Text style={{
        padding: 10,
        fontSize: 26,
        fontWeight: '400',
        color: 'red'
      }}>Inline Styling - Error</Text>

      - 클래스 스타일링: 컴포넌트에 직접 x, 스타일시트에 정의된 스타일을 사용<br/>
      - 여러 개의 스타일 적용시, 배열을 이용
      <Text style={[styles.text, { color: 'green'}]}>Inline Styling - Text</Text>
      <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>

      - 외부 스타일 이용하기, style.tsx
      <Text style={[textStyle.text, { color: 'green'}]}>Inline Styling - Text</Text>
      <Text style={[textStyle.text, textStyle.error]}>Inline Styling - Error</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black'
  },
  error: {
    fontWeight: '400',
    color: 'red'
  }
})
export default StyleScreen