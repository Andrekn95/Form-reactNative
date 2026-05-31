import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { User } from "./UserForm";

interface UserCardProps {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserCard({
  user,
  onEdit,
  onDelete,
}: UserCardProps) {
  return (
    <View className={styles.card.user}>
      <Text className={styles.text.title2}>{user.nombre}</Text>

      <Text className={styles.text.subtitle}>{user.correo}</Text>
      <Text className={styles.text.subtitle}>Teléfono: {user.telefono}</Text>
      <Text className={styles.text.subtitle}>Provincia: {user.provincia}</Text>
      <Text className={styles.text.subtitle}>País: {user.pais}</Text>
      <Text className={styles.text.subtitle}>Nacimiento: {user.fechaNacimiento}</Text>

      <View className="flex-row gap-3 mt-4">
        <TouchableOpacity className={styles.button.primary} onPress={onEdit}>
          <Text className={styles.button.text}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity className={styles.button.danger} onPress={onDelete}>
          <Text className={styles.button.text}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
