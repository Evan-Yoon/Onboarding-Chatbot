import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function FAQFooterCard({ onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>원하는 답변을 찾지 못하셨나요?</Text>
      <Text style={styles.description}>
        AI 어시스턴트에게 직접 질문하면 더 빠르게 답변을 받을 수 있습니다.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>AI 어시스턴트에게 질문하기</Text>
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
