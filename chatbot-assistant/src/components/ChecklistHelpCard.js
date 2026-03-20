import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChecklistHelpCard({ onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>체크리스트가 헷갈리나요?</Text>
      <Text style={styles.description}>
        AI 어시스턴트가 온보딩 절차와 준비 사항을 바로 안내해드립니다.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>AI 어시스턴트 열기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    marginBottom: 24,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.primarySoft,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: "700",
  },
});
