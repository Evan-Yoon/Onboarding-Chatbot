import { Platform } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";
import { getTabBarIcon } from "./tabBarIcons";

export function getMainTabScreenOptions(route, insets) {
  const bottomInset = insets?.bottom ?? 0;

  const floatingBottom =
    Platform.OS === "android"
      ? Math.max(bottomInset + 4, 10)
      : Math.max(bottomInset, 8);

  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: COLORS.tabActive,
    tabBarInactiveTintColor: COLORS.tabInactive,

    // 중요: 화면 자체 배경도 지정
    sceneStyle: {
      backgroundColor: COLORS.background,
    },

    tabBarStyle: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: floatingBottom,
      height: Platform.OS === "android" ? 62 : 68,
      paddingTop: 4,
      paddingBottom: 4,
      paddingHorizontal: 8,
      borderRadius: RADIUS.xxl,
      backgroundColor: COLORS.tabBackground,
      borderTopWidth: 0,
      elevation: 14,
      shadowColor: COLORS.tabShadow,
      shadowOpacity: 0.08,
      shadowRadius: 14,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },

    tabBarItemStyle: {
      marginHorizontal: 2,
      marginVertical: 0,
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
