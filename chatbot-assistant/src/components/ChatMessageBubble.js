import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ChatMessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <View style={[styles.row, isUser ? styles.rowRight : styles.rowLeft]}>
      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        {!isUser && <Text style={styles.botLabel}>AI Assistant</Text>}

        <Text style={[styles.messageText, isUser && styles.userMessageText]}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 12,
    flexDirection: "row",
  },
  rowLeft: {
    justifyContent: "flex-start",
  },
  rowRight: {
    justifyContent: "flex-end",
  },
  bubble: {
    maxWidth: "84%",
    borderRadius: RADIUS.xl,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  botBubble: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 8,
  },
  userBubble: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 8,
  },
  botLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 6,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.text,
  },
  userMessageText: {
    color: "#FFFFFF",
  },
});
