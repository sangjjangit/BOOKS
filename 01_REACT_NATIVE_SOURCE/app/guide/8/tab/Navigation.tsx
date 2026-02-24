import TabNavigation from "@/navigations/8/Tab"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"

const Navigation = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}

export default Navigation