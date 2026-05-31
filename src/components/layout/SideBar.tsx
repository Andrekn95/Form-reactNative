import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";

export type ViewType = "users" | "create";

interface SideBarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

export default function SideBar({
  currentView,
  setCurrentView,
}: SideBarProps) {

  
  return (
    <View className={styles.sidebar.container}>
      <TouchableOpacity
        className={`${styles.sidebar.button} ${
          currentView === "users"
            ? styles.sidebar.buttonActive
            : styles.sidebar.buttonInactive
        }`}
        onPress={() => setCurrentView("users")}
      >
        <Text className={styles.sidebar.buttonText}>
          Usuarios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`${styles.sidebar.button} ${
          currentView === "create"
            ? styles.sidebar.buttonActive
            : styles.sidebar.buttonInactive
        }`}
        onPress={() => setCurrentView("create")}
      >
        <Text className={styles.sidebar.buttonText}>
          Crear Usuario
        </Text>
      </TouchableOpacity>
    </View>
  );
}