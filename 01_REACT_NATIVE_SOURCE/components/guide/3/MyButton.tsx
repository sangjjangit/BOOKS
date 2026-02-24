import { Text, TouchableOpacity } from "react-native";

const MyButton = ({ title = "Button", children, onPress}: MyButtonProps) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 4,
        margin: 0,
        borderRadius: 6,
      }}
      onPress={onPress}>
      <Text style={{ color: 'white', fontSize: 20 }}>{ title || children }</Text>
    </TouchableOpacity>
  );
};

type MyButtonProps = {
  title?: string,
  children?: React.ReactNode,
  onPress?: () => void
}

export default MyButton;