import { theme } from "@/constants/9/theme";
import { Channel, ChannelCreation, Login, Signup } from "@/screens/9";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import MainTab from "./MainTab";
// import { ThemeContext } from "styled-components/native";

const Stack = createStackNavigator()

const MainStack = () => {
  // const theme = useContext(ThemeContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.background },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen name="Main" component={ MainTab} />
      <Stack.Screen name="Channel Creation" component={ ChannelCreation }
      />
      <Stack.Screen name="Channel" component={ Channel }
      />
    </Stack.Navigator>
  )
}

export default MainStack