import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    alert('Đăng nhập thành công!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

     {/* LOGO */}
<View style={styles.logoArea}>
  <View style={styles.cartCircle}>
    <Text style={styles.cartIcon}>🛒</Text>
  </View>

  <View>
    <Text style={styles.logoText}>
      DIGITAL RESOURCES
    </Text>

    <Text style={styles.logoSubText}>
      Digital Marketplace
    </Text>
  </View>
</View>

      {/* KHUNG ĐĂNG NHẬP */}
      <View style={styles.loginBox}>

        <Text style={styles.title}>ĐĂNG NHẬP</Text>

        {/* EMAIL */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* NÚT ĐĂNG NHẬP */}
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            ĐĂNG NHẬP
          </Text>
        </Pressable>

        {/* QUÊN MẬT KHẨU */}
        <Pressable>
          <Text style={styles.forgot}>
            Quên mật khẩu?
          </Text>
        </Pressable>

        {/* ĐĂNG KÝ */}
        <View style={styles.bottomRow}>
          <Text style={styles.normalText}>
            Chưa có tài khoản?
          </Text>

          <Pressable>
            <Text style={styles.linkText}>
              {' '}Đăng ký ngay
            </Text>
          </Pressable>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#087DBD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  cartCircle: {
  width: 55,
  height: 55,
  borderRadius: 30,
  borderWidth: 3,
  borderColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
},

cartIcon: {
  fontSize: 28,
},

  logoText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  logoSubText: { 
    color: '#DCECF7',
    fontSize: 14,
    marginTop:3,
  },

  loginBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 25,
  },

  title: { //dang nhap
    textAlign: 'center',
    fontSize: 21 ,
    color: '#222222',
    marginBottom: 35,
  },

  input: { //  2 khung dang nhap
    height: 46,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 18,
  },

  button: {
    height: 46,
    backgroundColor: '#0565f5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  forgot: {
    color: '#F02B2B',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  normalText: {
    color: '#333333',
    fontSize: 14,
  },

  linkText: {
    color: '#1769E8',
    fontWeight: 'bold',
    fontSize: 14,
  },

});