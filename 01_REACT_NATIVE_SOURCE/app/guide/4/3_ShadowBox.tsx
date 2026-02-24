import ShadowBox from "@/components/guide/4/ShadowBox"
import { viewStyle } from "@/styles/4/style"
import { View } from "react-native"

const LayoutScreen = () => {
  return (
    <View style={viewStyle.container}>
      <ShadowBox />
        - shadowColor: 그림자 색 설정 <br />
        - shadowOffset: width, height 그림자 거리 설정 <br />
        - shadowOpacity: 그림자의 불투명도 설정 <br />
        - shadownRadius: 그림자의 흐름 반경 설정 <br />
    </View>
  )
}
export default LayoutScreen