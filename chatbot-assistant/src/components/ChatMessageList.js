import React from "react";
import { View } from "react-native";
import ChatMessageBubble from "./ChatMessageBubble";

export default function ChatMessageList({ messages = [] }) {
  return (
    <View>
      {messages.map((message) => (
        <ChatMessageBubble key={message.id} message={message} />
      ))}
    </View>
  );
}
