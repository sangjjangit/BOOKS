import { ChannelList, Profile } from "@/screens/9";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ThemeContext } from "styled-components/native";
import { theme } from "@/constants/9/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from "react";

const Tab = createBottomTabNavigator()

const TabBarIcon = ({focused, name}:any) => {
  return (
    <MaterialIcons
      name={name}
      size={26}
      color={focused ? theme.tabActiveColor : theme.tabInActiveColor}
    />
  )
}

const MainTab = ({ navigation, route }:any) => {
  // const theme = useContext(ThemeContext)

  useEffect(() => {
    const titles = route.state?.routeNames || ['Channels']
    const index = route.state?.index || 0
    navigation.setOptions({
      headerTitle: titles[index],
      headerRight: () =>
        index === 0 && (
          <MaterialIcons
            name="add"
            size={26}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('Channel Creation')}
          />
        ),
    })
  }, [route])

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.tabActiveColor,
        tabBarInactiveTintColor: theme.tabInActiveColor,
      }}
    >
      <Tab.Screen name="Channels" component={ ChannelList }
        options={{
          tabBarIcon: ({ focused }) => TabBarIcon({focused, name: focused ? 'chat-bubble':'chat-bubble-outline'}),
        }}
      />
      <Tab.Screen name="Profile" component={ Profile }
        options={{
          tabBarIcon: ({ focused }) => TabBarIcon({focused, name: focused ? 'person':'person-outline'}),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab