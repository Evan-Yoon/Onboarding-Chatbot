import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChecklistItemCard({ item, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => onToggle(item.id)}
    >
      <View style={[styles.checkbox, item.completed && styles.checkboxActive]}>
        {item.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, item.completed && styles.titleCompleted]}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.outline,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    marginTop: 2,
    backgroundColor: COLORS.surface,
  },
  checkboxActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 22,
    marginBottom: 6,
  },
  titleCompleted: {
    opacity: 0.7,
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.textMuted,
  },
});
