import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { ChecklistProvider } from "./src/context/ChecklistContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ChecklistProvider>
        <AppNavigator />
      </ChecklistProvider>
    </SafeAreaProvider>
  );
}
