import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

function SmallFeatureCard({
  icon,
  title,
  description,
  meta,
  warm = false,
  onPress,
}) {
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

      {meta ? <Text style={styles.metaText}>{meta}</Text> : null}
    </TouchableOpacity>
  );
}

function WideFeatureCard({ icon, title, description, meta, onPress }) {
  return (
    <TouchableOpacity
      style={styles.wideCard}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.wideLeft}>
        <View style={[styles.iconBox, styles.wideIconBox]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>

        <View style={styles.wideTextArea}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{description}</Text>
          {meta ? <Text style={styles.metaText}>{meta}</Text> : null}
        </View>
      </View>

      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

export default function FeatureGrid({
  faqCount = 0,
  chatbotSuggestionCount = 0,
  checklistRemainingCount = 0,
  checklistCompletionRate = 0,
  onPressFAQ,
  onPressAI,
  onPressChecklist,
}) {
  return (
    <View style={styles.grid}>
      <SmallFeatureCard
        icon="?"
        title="자주 묻는 질문"
        description="회사 생활의 주요 질문을 빠르게 확인하세요."
        meta={`등록된 FAQ ${faqCount}개`}
        onPress={onPressFAQ}
      />

      <SmallFeatureCard
        icon="🤖"
        title="AI 어시스턴트"
        description="온보딩 관련 질문에 즉시 답변해드립니다."
        meta={`추천 질문 ${chatbotSuggestionCount}개`}
        warm
        onPress={onPressAI}
      />

      <WideFeatureCard
        icon="☑"
        title="체크리스트"
        description="온보딩 진행 현황을 확인하세요."
        meta={`남은 항목 ${checklistRemainingCount}개 · 완료율 ${checklistCompletionRate}%`}
        onPress={onPressChecklist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  smallCard: {
    width: "48%",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 16,
    marginBottom: 14,
    minHeight: 160,
  },
  wideCard: {
    width: "100%",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 16,
    marginBottom: 14,
    minHeight: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wideLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  wideTextArea: {
    flex: 1,
  },
  wideIconBox: {
    marginBottom: 0,
    marginRight: 14,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
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
    marginBottom: 8,
  },
  metaText: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.primary,
  },
  chevron: {
    fontSize: 30,
    color: "#A5A8B5",
    marginTop: -4,
    marginLeft: 10,
  },
});
