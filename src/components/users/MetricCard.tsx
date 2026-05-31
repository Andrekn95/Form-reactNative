import { View, Text } from "react-native";
import { styles } from "../../styles/styles";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export default function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <View className={styles.card.metric}>
      <Text className={styles.text.subtitle}>
        {title}
      </Text>

      <Text className={styles.text.metricValue}>
        {value}
      </Text>

      {description && (
        <Text className={styles.text.metricLabel}>
          {description}
        </Text>
      )}
    </View>
  );
}