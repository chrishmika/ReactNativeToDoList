import React from "react";
import TodoList from "./TodoList";
import FAQ from "./FAQ";
import FeedBack from "./FeedBack";
import Settings from "./Settings";
import Report from "./Report";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//Drawer navigation
const drawer = createDrawerNavigator();
function DrawerGroup() {
  return (
    <drawer.Navigator>
      <drawer.Screen name="Dashboard" component={TodoList} options={{ drawerIcon: () => <Ionicons name="logo-tableau" size={24} color="black" /> }} />
      <drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: () => <Ionicons name="settings-outline" size={24} color="black" /> }} />
      <drawer.Screen name="Report" component={Report} options={{ drawerIcon: () => <Ionicons name="document-text-outline" size={24} color="black" /> }} />
      <drawer.Screen name="FeedBack" component={FeedBack} options={{ drawerIcon: () => <FontAwesome6 name="comments" size={24} color="black" /> }} />
      <drawer.Screen name="FAQ" component={FAQ} options={{ drawerIcon: () => <FontAwesome6 name="question-circle" size={24} color="black" /> }} />
    </drawer.Navigator>
  );
}

const ComponentView = () => {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
};

export default ComponentView;

//css styles in down
