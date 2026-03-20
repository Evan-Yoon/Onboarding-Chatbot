import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function FAQSearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⌕</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="질문을 검색해보세요"
        placeholderTextColor="#9AA0AE"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.outline,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    fontSize: 18,
    color: COLORS.textMuted,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
  },
});
