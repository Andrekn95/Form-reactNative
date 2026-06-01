import { View, Text, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "../styles/styles";
import MetricCard from "../components/users/MetricCard";
import UserList from "../components/users/UserList";
import EditUserModal from "../components/users/EditUserModal";
import { User } from "../components/users/UserForm";
import FeedbackMessage from "../components/FeedbackMessage";

interface UsersScreenProps {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

export default function UsersScreen({ users, onDelete, onEdit }: UsersScreenProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 8000);
  };

  const handleEditPress = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleSave = (user: User) => {
    onEdit(user);
    setModalVisible(false);
    setSelectedUser(null);
    showMessage("✅ Usuario actualizado exitosamente");
  };

  const handleDelete = (id: string) => {
    onDelete(id);
    showMessage("🗑️ Usuario eliminado exitosamente");
  };

  const lastUser = users[users.length - 1];

  return (
    <ScrollView className="flex-1">

      <Text className={styles.text.title}>Lista de Usuarios</Text>

      <FeedbackMessage message={message} />

      {/* Métricas */}
      <View className="flex-row gap-4 mt-6">
        <MetricCard title="Usuarios Totales" value={String(users.length)} />
        <MetricCard title="Último Usuario" value={lastUser ? lastUser.nombre : "-"} />
      </View>

      {/* Buscador */}
      <View className="mt-6">
        <TextInput
          placeholder="Buscar por nombre..."
          value={search}
          onChangeText={setSearch}
          className={styles.input.base}
        />
      </View>

      {/* Lista */}
      <View className="mt-4">
        <UserList
          users={filteredUsers}
          onEdit={handleEditPress}
          onDelete={handleDelete}
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