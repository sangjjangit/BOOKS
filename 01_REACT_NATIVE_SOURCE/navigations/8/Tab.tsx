import { Mail, Meet, Settings } from "@/screens/8/TabScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const TabIcon = ({ name, size, color }:any) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Settings"
      screenOptions={({ route }) => ({
        tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#54b7f9',
          borderTopColor: '#ffffff',
          borderTopWidth: 2,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#cfcfcf',
        tabBarIcon: (props) => {
          const name = route.name.toLowerCase()
          return TabIcon({ ...props, name })
        },
      })}
    >
      <Tab.Screen name="Mail"
        component={Mail}
        options={{
          tabBarLabel: 'Index',
          tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'email':'email-outline'}),
        }}
      />
      <Tab.Screen name="Meet" component={Meet}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'video':'video-outline'}),
        }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: props => TabIcon({ ...props, name: props.focused ? 'settings':'settings-outline'}),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation