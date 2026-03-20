import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export default function GreetingSection({
  name = "Alex",
  subtitle = "오늘의 온보딩 가이드입니다.",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}님, 환영합니다!</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 22,
  },
  title: {
    fontSize: 29,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 38,
    letterSpacing: -0.8,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: COLORS.textMuted,
    lineHeight: 24,
  },
});
