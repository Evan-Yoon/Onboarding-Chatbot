import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import ChecklistHeroCard from "../components/ChecklistHeroCard";
import ChecklistSegmentTabs from "../components/ChecklistSegmentTabs";
import ChecklistProgressCard from "../components/ChecklistProgressCard";
import ChecklistItemList from "../components/ChecklistItemList";
import ChecklistHelpCard from "../components/ChecklistHelpCard";
import checklistData from "../data/checklistData";
import { COLORS, SPACING } from "../constants/theme";

export default function ChecklistScreen({ navigation }) {
  const [segments, setSegments] = useState(checklistData);
  const [selectedKey, setSelectedKey] = useState(
    checklistData[0]?.key || "firstDay",
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

  const handleToggleItem = (itemId) => {
    setSegments((prev) =>
      prev.map((segment) => {
        if (segment.key !== selectedKey) return segment;

        return {
          ...segment,
          items: segment.items.map((item) =>
            item.id === itemId ? { ...item, completed: !item.completed } : item,
          ),
        };
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
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
    paddingBottom: 150,
  },
});
