import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { useState } from "react";
import { styles } from "../../styles/styles";

export interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  pais: string;
  fechaNacimiento: string;
  contrasena: string;
  confirmacion: string;
  terminos: boolean;
}

interface UserFormFieldsProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  contrasena: string;
  showTerminos?: boolean;
}

export default function UserFormFields({
  control,
  errors,
  contrasena,
  showTerminos = true,
}: UserFormFieldsProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View className="gap-4">

      {/* Nombre Completo */}
      <View>
        <Text className={styles.input.label}>Nombre Completo</Text>
        <Controller
          control={control}
          name="nombre"
          rules={{
            required: "El nombre es obligatorio",
            maxLength: { value: 50, message: "Máximo 50 caracteres" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ingrese el nombre completo"
              autoCapitalize="words"
              maxLength={50}
              value={value}
              onChangeText={onChange}
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
              placeholder="correo@ejemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
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
          rules={{
            required: "El teléfono es obligatorio",
            pattern: { value: /^09\d{8}$/, message: "Debe empezar con 09 y tener 10 dígitos" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="09XXXXXXXX"
              keyboardType="numeric"
              maxLength={10}
              value={value}
              onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ""))}
              className={errors.telefono ? styles.input.error : styles.input.base}
            />
          )}
        />
        {errors.telefono && <Text className={styles.text.error}>{errors.telefono.message}</Text>}
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
        {errors.pais && <Text className={styles.text.error}>{errors.pais.message}</Text>}
      </View>

      {/* Fecha de Nacimiento */}
      <View>
        <Text className={styles.input.label}>Fecha de Nacimiento</Text>
        <Controller
          control={control}
          name="fechaNacimiento"
          rules={{ required: "La fecha es obligatoria" }}
          render={({ field: { onChange, value } }) => (
            <>
              <TouchableOpacity
                className={errors.fechaNacimiento ? styles.input.error : styles.input.base}
                onPress={() => setShowDatePicker(!showDatePicker)}
              >
                <Text className={value ? "text-slate-800" : "text-slate-400"}>
                  {value || "Seleccionar fecha"}
                </Text>
              </TouchableOpacity>

              {showDatePicker && (
                <input
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  style={{
                    marginTop: 8,
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px solid #cbd5e1",
                    width: "100%",
                    fontSize: "14px",
                  }}
                  onChange={(e) => {
                    const [year, month, day] = e.target.value.split("-");
                    onChange(`${day}/${month}/${year}`);
                    setShowDatePicker(false);
                  }}
                />
              )}
            </>
          )}
        />
        {errors.fechaNacimiento && <Text className={styles.text.error}>{errors.fechaNacimiento.message}</Text>}
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
            pattern: { value: /(?=.*\d)/, message: "Debe contener al menos 1 número" },
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
        {errors.contrasena && <Text className={styles.text.error}>{errors.contrasena.message}</Text>}
      </View>

      {/* Confirmación */}
      <View>
        <Text className={styles.input.label}>Confirmar Contraseña</Text>
        <Controller
          control={control}
          name="confirmacion"
          rules={{
            required: "Confirma tu contraseña",
            validate: (val) => val === contrasena || "Las contraseñas no coinciden",
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
        {errors.confirmacion && <Text className={styles.text.error}>{errors.confirmacion.message}</Text>}
      </View>

      {/* Términos */}
     {showTerminos && (
  <View>
    <Controller
      control={control}
      name="terminos"
      rules={{ required: "Debes aceptar los términos" }}
      render={({ field: { onChange, value } }) => (
        <TouchableOpacity
          className="flex-row items-center gap-3"
          onPress={() => onChange(!value)}
        >
          <View className={`w-6 h-6 rounded border-2 items-center justify-center ${value ? "bg-blue-600 border-blue-600" : "border-slate-300"}`}>
            <Text className="text-white text-xs font-bold">{value ? "✓" : ""}</Text>
          </View>
          <Text className={styles.text.subtitle}>
            Acepto los términos y condiciones
          </Text>
        </TouchableOpacity>
      )}
    />
    {errors.terminos && <Text className={styles.text.error}>{errors.terminos.message}</Text>}
  </View>
)}

    </View>
  );
}