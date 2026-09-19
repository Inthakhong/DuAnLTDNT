// src/app/auth/register.tsx
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

export default function RegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirm) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp');
      return;
    }
    Alert.alert('Thành công', 'Đăng ký thành công!');
    router.replace('/auth/login');
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.containerCenter}>

      {/* LOGO */}
      <View style={GlobalStyles.logoArea}>
        <View style={GlobalStyles.cartCircle}>
          <Text style={GlobalStyles.cartIcon}>🛒</Text>
        </View>
        <View>
          <Text style={GlobalStyles.logoText}>DIGITAL RESOURCES</Text>
          <Text style={GlobalStyles.logoSubText}>Digital Marketplace</Text>
        </View>
      </View>

      {/* KHUNG ĐĂNG KÝ */}
      <View style={GlobalStyles.box}>
        <Text style={GlobalStyles.title}>ĐĂNG KÝ</Text>

        <TextInput
          style={GlobalStyles.input}
          placeholder="Họ và tên"
          placeholderTextColor="#777"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={GlobalStyles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={GlobalStyles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={GlobalStyles.input}
          placeholder="Xác nhận mật khẩu"
          placeholderTextColor="#777"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <Pressable style={GlobalStyles.button} onPress={handleRegister}>
          <Text style={GlobalStyles.buttonText}>ĐĂNG KÝ</Text>
        </Pressable>

        <View style={GlobalStyles.bottomRow}>
          <Text style={GlobalStyles.normalText}>Đã có tài khoản?</Text>
          <Pressable onPress={() => router.push('/auth/login')}>
            <Text style={GlobalStyles.linkText}> Đăng nhập</Text>
          </Pressable>
        </View>
      </View>

    </ScrollView>
  );
}