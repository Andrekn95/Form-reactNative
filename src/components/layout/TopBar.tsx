import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function TopBar() {
    return (
        <View className="flex-row items-center justify-between w-full h-16 px-6 mb-4">

            <View style={{ width: 100, height: 100 }}>
                <Image
                    source={require("../../../assets/logo.png")}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                    }}
                />
            </View>

            <View className="flex-row items-center gap-4">

                <TouchableOpacity className="py-1 px-2 active:opacity-70">
                    <Text className="text-slate-400 font-medium text-sm">
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity className="p-1 active:opacity-70">
                    <Text className="text-slate-400 text-base">⚙️</Text>
                </TouchableOpacity>

                <TouchableOpacity className="p-1 active:opacity-70">
                    <Text className="text-slate-400 text-base">🔔</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}