import { COLORS, RADIUS } from "../constants/theme";
import { getTabBarIcon } from "./tabBarIcons";

export function getMainTabScreenOptions(route) {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: COLORS.tabActive,
    tabBarInactiveTintColor: COLORS.tabInactive,
    tabBarStyle: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 20,
      height: 72,
      borderRadius: RADIUS.xl,
      backgroundColor: COLORS.tabBackground,
      borderTopWidth: 0,
      elevation: 12,
      shadowColor: COLORS.tabShadow,
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    tabBarItemStyle: {
      marginVertical: 10,
      borderRadius: RADIUS.md,
    },
    tabBarIcon: ({ focused, color, size }) =>
      getTabBarIcon(route.name, focused, color, size),
  };
}
