// import Counter from '@/components/guide/3/counter';
// import EventButton from '@/components/guide/3/EventButton';
// import EventInput from '@/components/guide/3/EventInput';
// import MyButton from '@/components/guide/3/my-button';
// import PressableButton from '@/components/guide/3/PressableButton';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function IndexScreen() {
//   const name = 'start'
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         {/* if 조건 */}
//         {(() => {
//           if (name === 'start') return 'start page';
//           else if (name === 'hello') return 'hello world!'
//           else return 'index page';
//         })()}
//         <br/>
//         {/* 삼항 연산자 */}
//         this is {name === 'start' ? 'start page': 'hello world!!'}
//         <br/>
//       </Text>

//       {name === 'start' && (
//         <Text style={styles.text}>start page</Text>
//       )}
//       {name !== 'start' && (
//         <Text style={styles.text}>hello world!!</Text>
//       )}
//       <Button title="Button" onPress={() => alert('click!!!')} />
//       <MyButton title="Button" onPress={() => alert('title MyButton!!!')} />
//       <MyButton title="Button" onPress={() => alert('children MyButton!!!')}>Sub Button</MyButton>
//       <MyButton onPress={() => alert('default MyButton!!!')} />

//       <Counter />

//       <EventButton />

//       <EventInput />

//       <PressableButton />

//       <Stack>
//         <Stack.Screen name="guide" />
//       </Stack>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 30,
//   }
// });