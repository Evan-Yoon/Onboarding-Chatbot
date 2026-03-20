import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => setOpen(!open)} activeOpacity={0.85}>
        <View style={styles.topRow}>
          <View style={styles.textArea}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.question}>{item.question}</Text>
            {item.isDummy && <Text style={styles.badge}>더미 데이터</Text>}
          </View>
          <Text style={styles.chevron}>{open ? "−" : "+"}</Text>
        </View>
      </TouchableOpacity>

      {open && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 16,
    marginBottom: 12,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textArea: {
    flex: 1,
    paddingRight: 12,
  },
  category: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 6,
  },
  question: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 24,
  },
  badge: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: "hidden",
  },
  chevron: {
    fontSize: 26,
    color: "#9AA0AE",
    lineHeight: 28,
  },
  answer: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textMuted,
  },
});
