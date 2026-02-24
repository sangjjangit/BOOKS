import StackNavigation from "@/navigations/8/Stack"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"

const Navigation = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}

export default Navigation