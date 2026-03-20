import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import ChatbotHeroCard from "../components/ChatbotHeroCard";
import SuggestedQuestionChips from "../components/SuggestedQuestionChips";
import ChatMessageList from "../components/ChatMessageList";
import ChatInputBar from "../components/ChatInputBar";
import chatbotData from "../data/chatbotData";
import { COLORS, SPACING } from "../constants/theme";

function findBotAnswer(inputText) {
  const normalized = inputText.trim().toLowerCase();

  if (!normalized) {
    return "질문을 입력해주세요.";
  }

  const matchedFAQ = chatbotData.faq.find(
    (item) =>
      item.question.toLowerCase().includes(normalized) ||
      normalized.includes(item.question.toLowerCase()),
  );

  if (matchedFAQ) {
    return matchedFAQ.answer;
  }

  const matchedRule = chatbotData.rules.find((rule) =>
    normalized.includes(rule.keyword.toLowerCase()),
  );

  if (matchedRule) {
    return matchedRule.content;
  }

  if (normalized.includes("연차") || normalized.includes("휴가")) {
    return "[더미 데이터] 연차 및 휴가 신청은 사내 시스템 또는 승인 절차를 통해 진행됩니다.";
  }

  if (normalized.includes("비품") || normalized.includes("소모품")) {
    return "[더미 데이터] 비품 및 소모품은 총무 담당 또는 요청 채널을 통해 신청할 수 있습니다.";
  }

  if (normalized.includes("노트북") || normalized.includes("장비")) {
    return "[더미 데이터] 업무용 장비는 입사 첫날 지급을 원칙으로 하며, 부서별 추가 장비는 별도 요청 후 지급됩니다.";
  }

  return "현재 등록된 데이터 기준으로 정확한 답변을 찾지 못했습니다. [더미 데이터] 실제 서비스에서는 HR/GA 운영 문서와 연동하여 더 정확한 답변을 제공할 수 있습니다.";
}

export default function ChatbotScreen() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "message-bot-1",
      role: "bot",
      text: "안녕하세요. ZeroWorks 온보딩 어시스턴트입니다. 근무시간, 복지, 휴가, 온보딩 절차에 대해 무엇이든 질문해보세요.",
    },
  ]);

  const suggestions = useMemo(() => chatbotData.suggestions, []);

  const handleSendMessage = (textFromChip) => {
    const text = (textFromChip ?? inputText).trim();
    if (!text) return;

    const userMessage = {
      id: `message-user-${Date.now()}`,
      role: "user",
      text,
    };

    const botMessage = {
      id: `message-bot-${Date.now() + 1}`,
      role: "bot",
      text: findBotAnswer(text),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AppHeader title="Chatbot" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ChatbotHeroCard />

          <SuggestedQuestionChips
            items={suggestions}
            onPressChip={handleSendMessage}
          />

          <ChatMessageList messages={messages} />

          <ChatInputBar
            value={inputText}
            onChangeText={setInputText}
            onSend={() => handleSendMessage()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 32,
  },
});
