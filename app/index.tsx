// src/app/index.tsx
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, GlobalStyles } from '../styles/GlobalStyles';

export default function HomeScreen() {
  const router = useRouter();

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

      {/* KHUNG CHÀO MỪNG */}
      <View style={GlobalStyles.box}>
        <Text style={GlobalStyles.title}>CHÀO MỪNG</Text>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.textSecondary,
            marginBottom: 30,
            fontSize: 14,
          }}
        >
          Tool, tài khoản, Canva Pro... Tất cả đều có tại DIGITAL RESOURCES
        </Text>

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={GlobalStyles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            GlobalStyles.button,
            {
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: COLORS.primaryDark,
              marginTop: 12,
            },
          ]}
          onPress={() => router.push('/auth/register')}
        >
          <Text
            style={[GlobalStyles.buttonText, { color: COLORS.primaryDark }]}
          >
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}