import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // إرسال بيانات تسجيل الدخول إلى الخادم
    console.log("Email:", email, "Password:", password);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>تسجيل الدخول</Text>
      <TextInput
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="تسجيل الدخول" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
