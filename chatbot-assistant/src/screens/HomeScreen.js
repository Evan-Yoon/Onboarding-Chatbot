import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import GreetingSection from "../components/GreetingSection";
import UrgentMissionCard from "../components/UrgentMissionCard";
import FeatureGrid from "../components/FeatureGrid";
import RecentCompletedList from "../components/RecentCompletedList";
import { COLORS, SPACING } from "../constants/theme";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AppHeader />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <GreetingSection name="지현" />

        <UrgentMissionCard />

        <FeatureGrid
          onPressFAQ={() => navigation.navigate("FAQ")}
          onPressAI={() => navigation.navigate("Chatbot")}
          onPressChecklist={() => navigation.navigate("Checklist")}
        />

        <RecentCompletedList />
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
    paddingBottom: 120,
  },
});
