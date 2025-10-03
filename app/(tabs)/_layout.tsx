import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor: "gray",
      tabBarActiveBackgroundColor:"purple"
    }}>
      <Tabs.Screen name="index" options={{title:"Home",
        tabBarIcon: ({ focused, color }) =>(
          <Feather name="home" size={24} color={color} />
        ),
      }}/>
      <Tabs.Screen name="login" options={{title:"Log In",
         tabBarIcon: ({ focused, color }) =>(
          <MaterialIcons name="login" size={24} color={color} />
        ),
      }}/>
    </Tabs>
  )
}
