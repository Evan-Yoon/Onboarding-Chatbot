import { Platform } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";
import { getTabBarIcon } from "./tabBarIcons";

export function getMainTabScreenOptions(route, insets) {
  const bottomInset = insets?.bottom ?? 0;

  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: COLORS.tabActive,
    tabBarInactiveTintColor: COLORS.tabInactive,

    sceneStyle: {
      backgroundColor: COLORS.background,
    },

    tabBarStyle: {
      height: 54 + (Platform.OS === "android" ? bottomInset : bottomInset),
      paddingBottom: bottomInset,
      backgroundColor: COLORS.surface,
      borderTopWidth: 1,
      borderTopColor: COLORS.outline,
      elevation: 0,
      shadowOpacity: 0,
    },

    tabBarItemStyle: {
      marginVertical: 6,
      borderRadius: RADIUS.md,
      alignItems: "center",
      justifyContent: "center",
    },

    tabBarIconStyle: {
      marginTop: 0,
      marginBottom: 0,
    },

    tabBarIcon: ({ focused, color, size }) =>
      getTabBarIcon(route.name, focused, color, size),
  };
}
