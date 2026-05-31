import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { styles } from "../styles/styles";
import MetricCard from "../components/users/MetricCard";
import UserList from "../components/users/UserList";
import EditUserModal from "../components/users/EditUserModal";
import { User } from "../components/users/UserForm";

interface UsersScreenProps {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

export default function UsersScreen({ users, onDelete, onEdit }: UsersScreenProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditPress = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleSave = (user: User) => {
    onEdit(user);
    setModalVisible(false);
    setSelectedUser(null);
  };

  const lastUser = users[users.length - 1];

  return (
    <ScrollView className="flex-1">

      <Text className={styles.text.title}>Lista de Usuarios</Text>

      {/* Métricas */}
      <View className="flex-row gap-4 mt-6">
        <MetricCard
          title="Usuarios Totales"
          value={String(users.length)}
        />
        <MetricCard
          title="Último Usuario"
          value={lastUser ? lastUser.nombre : "-"}
        />
        <MetricCard
          title="Último Registro"
          value={lastUser ? lastUser.fechaNacimiento : "-"}
        />
      </View>

      {/* Lista */}
      <View className="mt-6">
        <UserList
          users={users}
          onEdit={handleEditPress}
          onDelete={onDelete}
        />
      </View>

      {/* Modal */}
      <EditUserModal
        visible={modalVisible}
        user={selectedUser}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />

    </ScrollView>
  );
}