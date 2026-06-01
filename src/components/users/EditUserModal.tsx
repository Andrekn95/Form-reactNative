import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import UserFormFields, { FormData } from "./UserFormFields";
import { User } from "./UserForm";

interface EditUserModalProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export default function EditUserModal({ visible, user, onClose, onSave }: EditUserModalProps) {
 

  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
    mode: "onChange",
  });

  const contrasena = watch("contrasena");

  useEffect(() => {
    if (user) {
      reset({
        nombre: user.nombre,
        correo: user.correo,
        telefono: user.telefono,
        pais: user.pais,
        fechaNacimiento: user.fechaNacimiento,
        contrasena: user.contrasena,
        confirmacion: user.contrasena,
        terminos: false,
      });
    }
  }, [user]);

  const onValid = (data: FormData) => {
    onSave({ ...data, id: user!.id, terminos: user!.terminos });

    setTimeout(() => {
      
      onClose();
    }, 2000);
  };

  if (!user) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className={styles.modal.overlay}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View className={styles.modal.container}>

            <Text className={styles.text.title2}>Editar Usuario</Text>


            <View className="mt-4">
              <UserFormFields
                control={control}
                errors={errors}
                contrasena={contrasena}
                showTerminos={false}
              />
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