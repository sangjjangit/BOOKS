import { theme } from "@/constants/9/theme";
import { Login, Signup } from "@/screens/9";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
// import { ThemeContext } from "styled-components/native";

const Stack = createStackNavigator()

const AuthStack = () => {
  // const theme = useContext(ThemeContext)
  return (
    <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: theme.background },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen name="Login" component={ Login }
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Signup" component={ Signup }
        options={{ headerBackButtonDisplayMode: 'minimal' }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack