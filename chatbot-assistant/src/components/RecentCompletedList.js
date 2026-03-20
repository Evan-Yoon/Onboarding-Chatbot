import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

function RecentCompletedItem({ title, time, status = "SUCCESS" }) {
  const isReady = status === "READY";

  return (
    <View style={styles.itemCard}>
      <View style={[styles.checkCircle, isReady && styles.readyCircle]}>
        <Text style={[styles.checkText, isReady && styles.readyText]}>
          {isReady ? "…" : "✓"}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemTime}>{time}</Text>
      </View>

      <View style={[styles.badge, isReady && styles.readyBadge]}>
        <Text style={[styles.badgeText, isReady && styles.readyBadgeText]}>
          {status}
        </Text>
      </View>
    </View>
  );
}

export default function RecentCompletedList({ items = [], onPressMore }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>방금 완료된 항목</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressMore}>
          <Text style={styles.sectionAction}>전체보기</Text>
        </TouchableOpacity>
      </View>

      {items.map((item) => (
        <RecentCompletedItem
          key={item.id}
          title={item.title}
          time={item.time}
          status={item.status}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  headerRow: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
  },
  sectionAction: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
  },
  itemCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  checkCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  readyCircle: {
    backgroundColor: COLORS.surfaceMuted,
  },
  checkText: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 18,
  },
  readyText: {
    color: COLORS.textMuted,
  },
  info: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 4,
  },
  itemTime: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  badge: {
    backgroundColor: COLORS.primarySoft,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  readyBadge: {
    backgroundColor: COLORS.surfaceMuted,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "800",
  },
  readyBadgeText: {
    color: COLORS.textMuted,
  },
});
