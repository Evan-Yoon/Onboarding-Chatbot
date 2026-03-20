import React, { useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import GreetingSection from "../components/GreetingSection";
import UrgentMissionCard from "../components/UrgentMissionCard";
import FeatureGrid from "../components/FeatureGrid";
import RecentCompletedList from "../components/RecentCompletedList";

import faqData from "../data/faqData";
import chatbotData from "../data/chatbotData";
import { useChecklist } from "../context/ChecklistContext";
import { COLORS, SPACING } from "../constants/theme";

export default function HomeScreen({ navigation }) {
  const faqCount = faqData.length;
  const chatbotSuggestionCount = chatbotData.suggestions.length;
  const { segments } = useChecklist();

  const {
    totalChecklistCount,
    completedChecklistCount,
    remainingChecklistCount,
    completionRate,
    recentCompletedItems,
  } = useMemo(() => {
    const allItems = segments.flatMap((section) => section.items);

    const completedItems = allItems
      .filter((item) => item.completed)
      .sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));
    const totalCount = allItems.length;
    const completedCount = completedItems.length;
    const remainingCount = totalCount - completedCount;
    const rate =
      totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const recentItems = completedItems.slice(0, 2).map((item, index) => ({
      id: `recent-${item.id}-${index}`,
      title: item.title.replace("[더미 데이터] ", ""),
      time: index === 0 ? "방금 전" : "오늘",
      status: "SUCCESS",
    }));

    return {
      totalChecklistCount: totalCount,
      completedChecklistCount: completedCount,
      remainingChecklistCount: remainingCount,
      completionRate: rate,
      recentCompletedItems: recentItems,
    };
  }, [segments]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AppHeader />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <GreetingSection name="지현" />

        <UrgentMissionCard
          title="긴급 미션: 근로 계약서 서명 완료하기"
          description="원활한 업무 시작을 위해 오늘 오후 6시까지 서명이 필요합니다."
          buttonText="지금 서명하기"
        />

        <FeatureGrid
          faqCount={faqCount}
          chatbotSuggestionCount={chatbotSuggestionCount}
          checklistRemainingCount={remainingChecklistCount}
          checklistCompletionRate={completionRate}
          onPressFAQ={() => navigation.navigate("FAQ")}
          onPressAI={() => navigation.navigate("Chatbot")}
          onPressChecklist={() => navigation.navigate("Checklist")}
        />

        <RecentCompletedList
          items={
            recentCompletedItems.length > 0
              ? recentCompletedItems
              : [
                  {
                    id: "recent-empty-1",
                    title: "완료된 항목이 아직 없습니다",
                    time: "온보딩 진행 전",
                    status: "READY",
                  },
                ]
          }
          onPressMore={() => navigation.navigate("Checklist")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 32,
  },
});
