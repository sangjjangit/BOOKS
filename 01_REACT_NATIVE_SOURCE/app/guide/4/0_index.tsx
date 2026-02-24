import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>리액트 네이티브 스타일</Text>
      <Button title="1_inline_style" onPress={() => {
        router.push('/guide/4/1_inline_style')
      }} />
      <Button title="2_Layout" onPress={() => {
        router.push('/guide/4/2_Layout')
      }} />
      <Button title="3_ShadowBox" onPress={() => {
        router.push('/guide/4/3_ShadowBox')
      }} />
      <Text style={styles.text}>스타일드 컴포넌트</Text>
      - npm install styled-components <br/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});