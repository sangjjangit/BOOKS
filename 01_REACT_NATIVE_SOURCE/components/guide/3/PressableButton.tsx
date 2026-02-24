import { Pressable, Text } from "react-native";

type PressableButtonProps = {
  title?: string
}
const PressableButton = ({title = 'PressableButton'}:PressableButtonProps) => {
  return (
    // 리액트 네이티브 0.63 버전부터 기존 TouchableOpacity 대체하는 Pressable 컴포넌트 추가
    // Pressable 사용 권장
    // 사용자의 터치에 상호작용하는 컴포넌트
    // HitRect, PressRect 특징
    // HitRect: 버튼 모양보다 약간 떨어진 부분까지 이벤트가 발생할 수 있도록 조치
    // PressRect: 버튼 클릭 후 동작하지 않게 하기 위해 버튼을 누른 상태에서 손가락을 이동하여 벗어났다고 판단하기 위해 조절하는 기능
    <Pressable
      style={{padding: 10, backgroundColor: '#1abc9c'}}
      onPressIn={() => console.log('onPressIn')}
      onPressOut={() => console.log('onPressOut')}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('onLongPress')}
      delayLongPress={3000}
      pressRetentionOffset={{bottom:50, left: 50, right: 50, top: 50}}
      hitSlop={50}
    >
      <Text style={{fontSize: 24}}>{title}</Text>
    </Pressable>
  );
}
export default PressableButton;