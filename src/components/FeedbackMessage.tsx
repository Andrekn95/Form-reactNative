import { View, Text } from "react-native";

interface FeedbackMessageProps {
  message: string | null;
}

export default function FeedbackMessage({ message }: FeedbackMessageProps) {
  if (!message) return null;

  return (
    <View className="bg-green-100 border border-green-400 rounded-xl px-4 py-3 mt-4">
      <Text className="text-green-700 font-semibold">{message}</Text>
    </View>
  );
}