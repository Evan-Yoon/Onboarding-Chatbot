import React from "react";
import { View } from "react-native";
import ChecklistItemCard from "./ChecklistItemCard";

export default function ChecklistItemList({ items = [], onToggle }) {
  return (
    <View>
      {items.map((item) => (
        <ChecklistItemCard key={item.id} item={item} onToggle={onToggle} />
      ))}
    </View>
  );
}
