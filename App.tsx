import { useState, useEffect } from "react";
import { View } from "react-native";
import "./global.css";

import SideBar, { ViewType } from "./src/components/layout/SideBar";
import TopBar from "./src/components/layout/TopBar";
import UsersScreen from "./src/screens/UsersScreen";
import CreateUserScreen from "./src/screens/CreateUserScreen";
import { User } from "./src/components/users/UserForm";
import { userService } from "./src/services/userService";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("users");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await userService.getAll();
    setUsers(data);
  };

  const handleCreate = async (user: User) => {
    await userService.create(user);
    await loadUsers();
    setCurrentView("users");
  };

  const handleDelete = async (id: string) => {
    await userService.delete(id);
    await loadUsers();
  };

  const handleEdit = async (updated: User) => {
    await userService.update(updated.id, updated);
    await loadUsers();
  };

  return (
    <View className="flex-1 flex-row bg-slate-100">
      <SideBar currentView={currentView} setCurrentView={setCurrentView} />

      <View className="flex-1 p-6">
        <TopBar />

        {currentView === "users" && (
          <UsersScreen
            users={users}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}

        {currentView === "create" && (
          <CreateUserScreen onSubmit={handleCreate} />
        )}
      </View>
    </View>
  );
}