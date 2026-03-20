import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChecklistHeroCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>☑</Text>
      </View>

      <View style={styles.textArea}>
        <Text style={styles.title}>온보딩 체크리스트</Text>
        <Text style={styles.description}>
          신규 입사자가 빠르게 적응할 수 있도록 입사 첫날, 첫 주, 첫 달에 필요한
          핵심 항목을 정리했습니다.
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
    backgroundColor: COLORS.primarySoft,
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
