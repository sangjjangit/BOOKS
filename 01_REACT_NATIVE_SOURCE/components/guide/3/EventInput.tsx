import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const EventInput = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={{fontSize: 24}}>text: {text}</Text>
      <TextInput
        style={{fontSize: 15, borderWidth: 1, padding: 5}}
        placeholder="Enter a text..."
        // onChange={(event) => setText(event.nativeEvent.text)}
        onChangeText={text => setText(text)}
      />
    </View>
  );
}
export default EventInput;