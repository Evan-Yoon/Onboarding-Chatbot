import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, RADIUS } from "../constants/theme";

export default function AppHeader({
  title = "ZeroWorks",
  onMenuPress,
  onProfilePress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onMenuPress}
          activeOpacity={0.8}
        >
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={onProfilePress}
        activeOpacity={0.8}
      >
        <View style={styles.profileInner} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.background,
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    width: 22,
    height: 16,
    justifyContent: "space-between",
  },
  menuLine: {
    height: 2.5,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
    color: COLORS.primary,
    letterSpacing: -0.6,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.avatarBg,
    alignItems: "center",
    justifyContent: "center",
  },
  profileInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F7EFE8",
    borderWidth: 1,
    borderColor: "#DDBFA9",
  },
});
