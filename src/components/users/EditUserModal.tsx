import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../../styles/styles";
import { User } from "./UserForm";

interface EditUserModalProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export default function EditUserModal({ visible, user, onClose, onSave }: EditUserModalProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<User>({
    values: user ?? undefined,
  });

  const onValid = (data: User) => {
    onSave({ ...data, id: user!.id });
  };

  if (!user) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className={styles.modal.overlay}>
        <ScrollView>
          <View className={styles.modal.container}>

            <Text className={styles.text.title2}>Editar Usuario</Text>

            <View className="mt-4 gap-4">

              {/* Nombre */}
              <View>
                <Text className={styles.input.label}>Nombre</Text>
                <Controller
                  control={control}
                  name="nombre"
                  rules={{ required: "El nombre es obligatorio" }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="words"
                      className={errors.nombre ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.nombre && <Text className={styles.text.error}>{errors.nombre.message}</Text>}
              </View>

              {/* Correo */}
              <View>
                <Text className={styles.input.label}>Correo</Text>
                <Controller
                  control={control}
                  name="correo"
                  rules={{
                    required: "El correo es obligatorio",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Correo no válido" },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      className={errors.correo ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.correo && <Text className={styles.text.error}>{errors.correo.message}</Text>}
              </View>

              {/* Teléfono */}
              <View>
                <Text className={styles.input.label}>Teléfono</Text>
                <Controller
                  control={control}
                  name="telefono"
                  rules={{ required: "El teléfono es obligatorio" }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                      className={errors.telefono ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.telefono && <Text className={styles.text.error}>{errors.telefono.message}</Text>}
              </View>

              {/* Provincia */}
              <View>
                <Text className={styles.input.label}>Provincia</Text>
                <Controller
                  control={control}
                  name="provincia"
                  rules={{ required: "La provincia es obligatoria" }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      className={errors.provincia ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.provincia && <Text className={styles.text.error}>{errors.provincia.message}</Text>}
              </View>

              {/* País */}
              <View>
                <Text className={styles.input.label}>País</Text>
                <Controller
                  control={control}
                  name="pais"
                  rules={{ required: "El país es obligatorio" }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      className={errors.pais ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.pais && <Text className={styles.text.error}>{errors.pais.message}</Text>}
              </View>

              {/* Fecha */}
              <View>
                <Text className={styles.input.label}>Fecha de Nacimiento</Text>
                <Controller
                  control={control}
                  name="fechaNacimiento"
                  rules={{ required: "La fecha es obligatoria" }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      className={errors.fechaNacimiento ? styles.input.error : styles.input.base}
                    />
                  )}
                />
                {errors.fechaNacimiento && <Text className={styles.text.error}>{errors.fechaNacimiento.message}</Text>}
              </View>

            </View>

            <View className="flex-row gap-3 mt-6 justify-end">
              <TouchableOpacity className={styles.button.secondary} onPress={onClose}>
                <Text className={styles.button.text}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity className={styles.button.primary} onPress={handleSubmit(onValid)}>
                <Text className={styles.button.text}>Guardar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}