import { ScrollView, View, Text } from "react-native";
import { User } from "./UserForm";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserList({ users, onEdit, onDelete }: UserListProps) {
  if (users.length === 0) {
    return (
      <View className="mt-6 p-4 rounded-2xl bg-white shadow-sm">
        <Text className="text-slate-600">No hay usuarios registrados aún.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="mt-6" contentContainerStyle={{ gap: 16 }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={() => onEdit(user)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </ScrollView>
  );
}
