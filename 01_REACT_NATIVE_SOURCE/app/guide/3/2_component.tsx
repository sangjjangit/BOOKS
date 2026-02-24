import Counter from "@/components/guide/3/counter";
import EventButton from "@/components/guide/3/EventButton";
import EventInput from "@/components/guide/3/EventInput";
import MyButton from "@/components/guide/3/MyButton";
import PressableButton from "@/components/guide/3/PressableButton";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const name = 'sang' // 2. 변수
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Button Component</Text>
      <Button title="Button" onPress={() => alert('Click!!')} />

      <Text style={{fontSize: 20, marginBottom: 10}}>MyButton Component</Text>
      <MyButton title="MyButton" onPress={() => alert('mybutton click!')} />
      <MyButton title="MyButton2" onPress={() => alert('mybutton2 click!')} />

      <Counter />

      <Text style={{fontSize: 20, marginBottom: 10}}>EventButton Component</Text>
      <EventButton
        onPressIn={() => console.log('onPressIn')}
        onPressOut={() => console.log('onPressOut')}
        onPress={() => console.log('onPress')}
        onLongPress={() => console.log('onLongPress')}
      />

      <Text style={{fontSize: 20, marginBottom: 10}}>EventInput Component</Text>
      <EventInput />

      <Text style={{fontSize: 20, marginBottom: 10}}>PressableButton Component</Text>
      <PressableButton />

      <br />
      <Button title="Back" onPress={() => history.back()} />
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