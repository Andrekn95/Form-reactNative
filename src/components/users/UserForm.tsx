import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { styles } from "../../styles/styles";
import UserFormFields, { FormData } from "./UserFormFields";
import FeedbackMessage from "../FeedbackMessage";

export interface User {
    id: string;
    nombre: string;
    correo: string;
    telefono: string;
    pais: string;
    fechaNacimiento: string;
    contrasena: string;
    terminos: boolean;
}

interface UserFormProps {
    onSubmit: (user: User) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
    const [successMessage, setSuccessMessage] = useState(false);

    const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
        mode: "onChange",
        defaultValues: {
            nombre: "", correo: "", telefono: "", pais: "",
            fechaNacimiento: "", contrasena: "", confirmacion: "", terminos: false,
        },
    });

    const contrasena = watch("contrasena");

    const onValid = async (data: FormData) => {
        await onSubmit({
            id: Date.now().toString(),
            nombre: data.nombre,
            correo: data.correo,
            telefono: data.telefono,
            pais: data.pais,
            fechaNacimiento: data.fechaNacimiento,
            contrasena: data.contrasena,
            terminos: data.terminos,
        });
        reset();
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 8000);

    };

    return (
        <View className={styles.card.form}>
            <Text className={styles.text.title2}>Información del Usuario</Text>

          <FeedbackMessage message={successMessage ? "✅ Usuario creado exitosamente" : null} />

            <View className="mt-4">
                <UserFormFields
                    control={control}
                    errors={errors}
                    contrasena={contrasena}
                    showTerminos={true}
                />

                <TouchableOpacity
                    className={`${styles.button.success} mt-6`}
                    onPress={handleSubmit(onValid)}
                >
                    <Text className={styles.button.text}>Crear Usuario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}