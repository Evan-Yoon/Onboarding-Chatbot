import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

function SmallFeatureCard({ icon, title, description, warm = false, onPress }) {
  return (
    <TouchableOpacity
      style={styles.smallCard}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={[styles.iconBox, warm && styles.iconBoxWarm]}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
    </TouchableOpacity>
  );
}

function WideFeatureCard({ icon, title, description, onPress }) {
  return (
    <TouchableOpacity
      style={styles.wideCard}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.wideLeft}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{description}</Text>
        </View>
      </View>

      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

export default function FeatureGrid({
  onPressFAQ,
  onPressAI,
  onPressChecklist,
}) {
  return (
    <View style={styles.grid}>
      <SmallFeatureCard
        icon="?"
        title="자주 묻는 질문"
        description="회사 생활의 모든 궁금증을 해결하세요."
        onPress={onPressFAQ}
      />

      <SmallFeatureCard
        icon="🤖"
        title="AI 어시스턴트"
        description="무엇이든 물어보세요. 즉시 답변해 드립니다."
        warm
        onPress={onPressAI}
      />

      <WideFeatureCard
        icon="☑"
        title="체크리스트"
        description="남은 항목: 4개"
        onPress={onPressChecklist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: 14,
  },
  smallCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 18,
    minHeight: 170,
  },
  wideCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 18,
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wideLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  iconBoxWarm: {
    backgroundColor: "#F7E9E3",
  },
  iconText: {
    fontSize: 22,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textMuted,
  },
  chevron: {
    fontSize: 30,
    color: "#A5A8B5",
    marginTop: -4,
  },
});
