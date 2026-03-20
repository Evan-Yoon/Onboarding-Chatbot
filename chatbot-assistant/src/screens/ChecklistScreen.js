import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import ChecklistHeroCard from "../components/ChecklistHeroCard";
import ChecklistSegmentTabs from "../components/ChecklistSegmentTabs";
import ChecklistProgressCard from "../components/ChecklistProgressCard";
import ChecklistItemList from "../components/ChecklistItemList";
import ChecklistHelpCard from "../components/ChecklistHelpCard";
import { COLORS, SPACING } from "../constants/theme";
import { useChecklist } from "../context/ChecklistContext";

export default function ChecklistScreen({ navigation }) {
  const { segments, handleToggleItem } = useChecklist();
  const [selectedKey, setSelectedKey] = useState(
    segments[0]?.key || "firstDay",
  );

  const selectedSegment = useMemo(() => {
    return (
      segments.find((segment) => segment.key === selectedKey) || segments[0]
    );
  }, [segments, selectedKey]);

  const completedCount = useMemo(() => {
    return selectedSegment.items.filter((item) => item.completed).length;
  }, [selectedSegment]);

  const totalCount = selectedSegment.items.length;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AppHeader title="Checklist" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ChecklistHeroCard />

        <ChecklistSegmentTabs
          segments={segments}
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
        />

        <ChecklistProgressCard
          title={selectedSegment.title}
          completedCount={completedCount}
          totalCount={totalCount}
        />

        <ChecklistItemList
          items={selectedSegment.items}
          onToggle={handleToggleItem}
        />

        <ChecklistHelpCard onPress={() => navigation.navigate("Chatbot")} />
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
