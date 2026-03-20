import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChecklistSegmentTabs({
  segments = [],
  selectedKey,
  onSelect,
}) {
  return (
    <View style={styles.wrapper}>
      {segments.map((segment) => {
        const active = selectedKey === segment.key;

        return (
          <TouchableOpacity
            key={segment.key}
            style={[styles.tab, active && styles.activeTab]}
            activeOpacity={0.85}
            onPress={() => onSelect(segment.key)}
          >
            <Text style={[styles.tabText, active && styles.activeTabText]}>
              {segment.shortLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.surfaceMuted,
    borderRadius: RADIUS.pill,
    padding: 4,
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: RADIUS.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: COLORS.surface,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textMuted,
  },
  activeTabText: {
    color: COLORS.primary,
  },
});
