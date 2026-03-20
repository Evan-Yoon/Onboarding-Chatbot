import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import FAQSearchBar from "../components/FAQSearchBar";
import FAQCategoryChips from "../components/FAQCategoryChips";
import FAQAccordionList from "../components/FAQAccordionList";
import FAQFooterCard from "../components/FAQFooterCard";
import faqData from "../data/faqData";
import { COLORS, SPACING } from "../constants/theme";

export default function FAQScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = useMemo(() => {
    const unique = [...new Set(faqData.map((item) => item.category))];
    return ["전체", ...unique];
  }, []);

  const filteredData = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        selectedCategory === "전체" || item.category === selectedCategory;

      const keyword = searchText.trim().toLowerCase();
      const matchesSearch =
        keyword.length === 0 ||
        item.question.toLowerCase().includes(keyword) ||
        item.answer.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [searchText, selectedCategory]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <AppHeader title="FAQ" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleSection}>
          <Text style={styles.title}>궁금한 점을 빠르게 찾아보세요</Text>
          <Text style={styles.subtitle}>
            근무, 복지, 휴가, 온보딩 관련 자주 묻는 질문을 모았습니다.
          </Text>
        </View>

        <FAQSearchBar value={searchText} onChangeText={setSearchText} />

        <FAQCategoryChips
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FAQAccordionList data={filteredData} />

        <FAQFooterCard onPress={() => navigation.navigate("Chatbot")} />
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
  titleSection: {
    marginTop: 10,
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 36,
    letterSpacing: -0.8,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.textMuted,
  },
});
