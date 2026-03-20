import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "../screens/HomeScreen";
import FAQScreen from "../screens/FAQScreen";
import ChecklistScreen from "../screens/ChecklistScreen";
import ChatbotScreen from "../screens/ChatbotScreen";

import { getMainTabScreenOptions } from "./tabOptions";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => getMainTabScreenOptions(route, insets)}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="FAQ" component={FAQScreen} />
      <Tab.Screen name="Checklist" component={ChecklistScreen} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
    </Tab.Navigator>
  );
}
