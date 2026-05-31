import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../../styles/styles";

export interface User {
    id: string;
    nombre: string;
    correo: string;
    telefono: string;
    provincia: string;
    pais: string;
    fechaNacimiento: string;
    contrasena: string;
}

interface FormData {

    nombre: string;
    correo: string;
    telefono: string;
    provincia: string;
    pais: string;
    fechaNacimiento: string;
    contrasena: string;
    confirmacion: string;
    terminos: boolean;
}

interface UserFormProps {
    onSubmit: (user: User) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange",
        defaultValues: {
            nombre: "",
            correo: "",
            telefono: "",
            provincia: "",
            pais: "",
            fechaNacimiento: "",
            contrasena: "",
            confirmacion: "",
            terminos: false,
        },
    });

    const contrasena = watch("contrasena");

    const onValid = (data: FormData) => {
        onSubmit({
            id: Date.now().toString(),
            nombre: data.nombre,
            correo: data.correo,
            telefono: data.telefono,
            provincia: data.provincia,
            pais: data.pais,
            fechaNacimiento: data.fechaNacimiento,
            contrasena: data.contrasena,
        });
    };

    return (
        <View className={styles.card.form}>

            <Text className={styles.text.title2}>Información del Usuario</Text>

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
                                placeholder="Ingrese el nombre"
                                autoCapitalize="words"
                                value={value}
                                onChangeText={onChange}
                                className={errors.nombre ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.nombre && (
                        <Text className={styles.text.error}>{errors.nombre.message}</Text>
                    )}
                </View>

                {/* Correo */}
                <View>
                    <Text className={styles.input.label}>Correo</Text>
                    <Controller
                        control={control}
                        name="correo"
                        rules={{
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Correo no válido",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="correo@ejemplo.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                className={errors.correo ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.correo && (
                        <Text className={styles.text.error}>{errors.correo.message}</Text>
                    )}
                </View>

                {/* Teléfono */}
                <View>
                    <Text className={styles.input.label}>Teléfono</Text>
                    <Controller
                        control={control}
                        name="telefono"
                        rules={{
                            required: "El teléfono es obligatorio",
                            minLength: { value: 10, message: "Mínimo 10 dígitos" },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="0999999999"
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                className={errors.telefono ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.telefono && (
                        <Text className={styles.text.error}>{errors.telefono.message}</Text>
                    )}
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
                                placeholder="Pichincha"
                                value={value}
                                onChangeText={onChange}
                                className={errors.provincia ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.provincia && (
                        <Text className={styles.text.error}>{errors.provincia.message}</Text>
                    )}
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
                                placeholder="Ecuador"
                                value={value}
                                onChangeText={onChange}
                                className={errors.pais ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.pais && (
                        <Text className={styles.text.error}>{errors.pais.message}</Text>
                    )}
                </View>

                {/* Fecha de Nacimiento */}
                <View>
                    <Text className={styles.input.label}>Fecha de Nacimiento</Text>
                    <Controller
                        control={control}
                        name="fechaNacimiento"
                        rules={{
                            required: "La fecha es obligatoria",
                            pattern: {
                                value: /^\d{2}\/\d{2}\/\d{4}$/,
                                message: "Formato DD/MM/AAAA",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="DD/MM/AAAA"
                                value={value}
                                onChangeText={onChange}
                                className={errors.fechaNacimiento ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.fechaNacimiento && (
                        <Text className={styles.text.error}>{errors.fechaNacimiento.message}</Text>
                    )}
                </View>

                {/* Contraseña */}
                <View>
                    <Text className={styles.input.label}>Contraseña</Text>
                    <Controller
                        control={control}
                        name="contrasena"
                        rules={{
                            required: "La contraseña es obligatoria",
                            minLength: { value: 6, message: "Mínimo 6 caracteres" },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="••••••••"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                className={errors.contrasena ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.contrasena && (
                        <Text className={styles.text.error}>{errors.contrasena.message}</Text>
                    )}
                </View>

                {/* Confirmación */}
                <View>
                    <Text className={styles.input.label}>Confirmar Contraseña</Text>
                    <Controller
                        control={control}
                        name="confirmacion"
                        rules={{
                            required: "Confirma tu contraseña",
                            validate: (val) =>
                                val === contrasena || "Las contraseñas no coinciden",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="••••••••"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                className={errors.confirmacion ? styles.input.error : styles.input.base}
                            />
                        )}
                    />
                    {errors.confirmacion && (
                        <Text className={styles.text.error}>{errors.confirmacion.message}</Text>
                    )}
                </View>

                {/* Términos */}
                <View>
                    <Controller
                        control={control}
                        name="terminos"
                        rules={{ required: "Debes aceptar los términos" }}
                        render={({ field: { onChange, value } }) => (
                            <View className="flex-row items-center gap-3">
                                <Switch value={value} onValueChange={onChange} />
                                <Text className={styles.text.subtitle}>
                                    Acepto los términos y condiciones
                                </Text>
                            </View>
                        )}
                    />
                    {errors.terminos && (
                        <Text className={styles.text.error}>{errors.terminos.message}</Text>
                    )}
                </View>

                <TouchableOpacity
                    className={styles.button.success}
                    onPress={handleSubmit(onValid)}
                >
                    <Text className={styles.button.text}>Crear Usuario</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}