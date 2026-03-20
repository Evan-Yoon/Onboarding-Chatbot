import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, RADIUS } from "../constants/theme";

export function getTabBarIcon(routeName, focused, color, size = 22) {
  let iconName = "ellipse-outline";

  if (routeName === "Home") {
    iconName = focused ? "home" : "home-outline";
  } else if (routeName === "FAQ") {
    iconName = focused ? "help-circle" : "help-circle-outline";
  } else if (routeName === "Checklist") {
    iconName = focused ? "checkmark-circle" : "checkmark-circle-outline";
  } else if (routeName === "Chatbot") {
    iconName = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
  }

  return (
    <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
      <Ionicons name={iconName} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    minWidth: 44,
    height: 44,
    borderRadius: RADIUS.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapperActive: {
    backgroundColor: COLORS.primarySoft,
    paddingHorizontal: 14,
  },
});
