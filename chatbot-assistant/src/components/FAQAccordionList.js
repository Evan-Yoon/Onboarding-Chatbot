import React from "react";
import { FlatList } from "react-native";
import FAQItem from "./FAQItem";

export default function FAQAccordionList({ data = [] }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FAQItem item={item} />}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}
