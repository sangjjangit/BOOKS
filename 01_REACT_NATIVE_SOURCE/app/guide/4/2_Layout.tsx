import { Contents, Footer, Header } from "@/components/guide/4/Layout"
import { viewStyle } from "@/styles/4/style"
import { View } from "react-native"

const LayoutScreen = () => {
  return (
    <View style={viewStyle.container}>

      <Header />
      <Contents />
      <Footer />

    </View>
  )
}
export default LayoutScreen