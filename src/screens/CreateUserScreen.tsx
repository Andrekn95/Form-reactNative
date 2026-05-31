import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import UserForm, { User } from "../components/users/UserForm";

interface CreateUserScreenProps {
  onSubmit: (user: User) => void;
}

export default function CreateUserScreen({ onSubmit }: CreateUserScreenProps) {
  return (
    <ScrollView className="flex-1">
      <Text className={styles.text.title}>Crear Usuario</Text>
      <View className="mt-6">
        <UserForm onSubmit={onSubmit} />
      </View>
    </ScrollView>
  );
}