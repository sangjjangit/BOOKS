import { Text, TouchableOpacity } from "react-native";

type EventButtonProps = {
  onPressIn?: () => void,
  onLongPress?: () => void,
  onPressOut?: () => void,
  onPress?: () => void,
}
const EventButton = ({ onPressIn, onLongPress, onPressOut, onPress}: EventButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f1c40f',
        padding: 8,
        margin: 5,
        borderRadius: 4,
      }}
      delayLongPress={3000}
      onPressIn={onPressIn}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Text style={{fontSize: 24}}>Press</Text>
    </TouchableOpacity>
  );
}
export default EventButton;