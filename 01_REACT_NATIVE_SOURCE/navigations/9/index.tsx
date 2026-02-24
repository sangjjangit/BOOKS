import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import AuthStack from "./AuthStack"
import Spinner from "@/components/guide/9/Spinner"
import { useContext } from "react"
import { ProgressContext, UserContext } from "@/contexts/9"
import MainStack from "./MainStack"

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext)
  const { user } = useContext(UserContext)

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        {/* <AuthStack /> */}
        {/* <MainStack /> */}
        {user.uid && user.email ? <MainStack /> : <AuthStack /> }
        {inProgress && <Spinner />}
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}

export default Navigation