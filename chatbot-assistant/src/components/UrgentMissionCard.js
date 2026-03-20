import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function UrgentMissionCard({
  title = "긴급 미션: 근로 계약서 서명 완료하기",
  description = "원활한 업무 시작을 위해 오늘 오후 6시까지 서명이 필요합니다.",
  buttonText = "지금 서명하기",
  onPress,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.alertIcon}>❗</Text>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 20,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "flex-start",
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  alertIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 32,
    marginBottom: 10,
    letterSpacing: -0.4,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.textMuted,
    marginBottom: 18,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
