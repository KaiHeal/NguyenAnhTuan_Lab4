import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index'; 

// Định nghĩa kiểu cho navigation
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation<WelcomeScreenNavigationProp>(); // Áp dụng kiểu cho navigation

  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate('Login'); // Điều hướng sau khi đăng xuất
    } catch (error: any) {
      console.error("Đăng xuất thất bại", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chúc mừng!</Text>
      <Text style={styles.message}>Bạn đã đăng nhập thành công với tài khoản:</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 24,
  },
});

export default WelcomeScreen;
