import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Link href={"/guide/3/1_jsx"}>3.1 JSX</Link>
      <Link href={"/guide/3/2_component"}>3.2 컴포넌트</Link>
      <Link href={"/guide/4/1_inline_style"}>4.1 스타일링</Link>
      <Link href={"/guide/4/2_Layout"}>4.2 리액트 네이티브 스타일</Link>
      <Link href={"/guide/4/3_ShadowBox"}>4.2.3 그림자</Link>
      <Link href={"/guide/4/4_StyledComponents"}>4.3 스타일드 컴포넌트</Link>
      <Link href={"/guide/5/TodoApp"}>5. TODO 앱</Link>
      <Link href={"/guide/6/Hooks"}>6. Hooks</Link>
      <Link href={"/guide/7/ContextAPI"}>7. ContextAPI</Link>
      <Link href={"/guide/8/stack/Navigation"}>8. 내비게이션(스택)</Link>
      <Link href={"/guide/8/tab/Navigation"}>8. 내비게이션(탭)</Link>
      <Link href={"/guide/9/ChatApp"}>9. 채팅 애플리케이션</Link>
      <StatusBar style="auto" />
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});