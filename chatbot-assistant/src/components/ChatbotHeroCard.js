import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChatbotHeroCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>🤖</Text>
      </View>

      <View style={styles.textArea}>
        <Text style={styles.title}>AI 온보딩 어시스턴트</Text>
        <Text style={styles.description}>
          근무시간, 복리후생, 휴가, 온보딩 절차 등 궁금한 점을 질문해보세요.
          실제 데이터와 더미 데이터를 함께 기반으로 답변합니다.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F7E9E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  icon: {
    fontSize: 24,
  },
  textArea: {
    flex: 1,
  },
  title: {
    fontSize: 21,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
    letterSpacing: -0.4,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textMuted,
  },
});
