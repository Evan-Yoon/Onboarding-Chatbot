import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function FAQCategoryChips({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => {
        const selected = selectedCategory === category;
        return (
          <TouchableOpacity
            key={category}
            style={[styles.chip, selected && styles.selectedChip]}
            activeOpacity={0.85}
            onPress={() => onSelectCategory(category)}
          >
            <Text
              style={[styles.chipText, selected && styles.selectedChipText]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    gap: 10,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.outline,
    marginRight: 10,
  },
  selectedChip: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textMuted,
  },
  selectedChipText: {
    color: "#FFFFFF",
  },
});
