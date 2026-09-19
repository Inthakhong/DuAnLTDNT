import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, ProfileStyles as styles } from '../../styles/ProfileStyles';

export default function ProfileScreen() {
  const [tab, setTab] = useState<'info' | 'password' | 'orders'>('info');

  return (
  <SafeAreaView style={styles.screen} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tài khoản của tôi</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card Header */}
        <View style={styles.userCard}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' }}
              style={styles.avatar}
            />
            <Pressable style={styles.cameraBadge}>
              <Text style={styles.cameraIcon}>📷</Text>
            </Pressable>
          </View>
          <Text style={styles.userName}>Em Thanh</Text>
          <Text style={styles.userSubText}>0987 654 321 • emthanh@example.com</Text>
          <View style={styles.tierBadge}>
            <Text style={styles.tierText}>⭐ Thành viên Vàng</Text>
          </View>
        </View>

        {/* Khối Ví tiền */}
        <View style={styles.walletCard}>
          <View style={styles.walletTopRow}>
            <Text style={styles.walletLabel}>Số dư ví hiện tại</Text>
          </View>
          <Text style={styles.walletAmount}>1.500.000đ</Text>
          <View style={styles.walletActions}>
            <Pressable style={styles.walletBtn}>
              <Text style={styles.walletBtnText}>+ Nạp tiền</Text>
            </Pressable>
            <Pressable style={styles.walletBtn}>
              <Text style={styles.walletBtnText}>Lịch sử GD</Text>
            </Pressable>
          </View>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabBar}>
          {[
            { key: 'info', label: 'Thông tin' },
            { key: 'password', label: 'Đổi MK' },
            { key: 'orders', label: 'Đơn hàng' },
          ].map((t) => (
            <Pressable
              key={t.key}
              style={[styles.tabButton, tab === t.key && styles.tabButtonActive]}
              onPress={() => setTab(t.key as any)}
            >
              <Text style={[styles.tabButtonText, tab === t.key && styles.tabButtonTextActive]}>
                {t.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* TAB 1: THÔNG TIN */}
        {tab === 'info' && (
          <View style={styles.formContainer}>
            <View style={styles.boxContainer}>
              <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
              
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Họ và tên</Text>
                <TextInput style={styles.input} defaultValue="Em Thanh" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Địa chỉ Email</Text>
                <TextInput style={styles.input} defaultValue="emthanh@example.com" keyboardType="email-address" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Số điện thoại</Text>
                <TextInput style={styles.input} defaultValue="0987 654 321" keyboardType="phone-pad" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Địa chỉ giao hàng mặc định</Text>
                <TextInput
                  style={[styles.input, styles.inputMultiline]}
                  defaultValue="123 Đường ABC, Phường Bến Nghé, Quận 1, TP.HCM"
                  multiline
                />
              </View>

              <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>LƯU THAY ĐỔI</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* TAB 2: ĐỔI MẬT KHẨU */}
        {tab === 'password' && (
          <View style={styles.formContainer}>
            <View style={styles.boxContainer}>
              <Text style={styles.sectionTitle}>Bảo mật tài khoản</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Mật khẩu hiện tại</Text>
                <TextInput style={styles.input} secureTextEntry placeholder="Nhập mật khẩu hiện tại" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Mật khẩu mới</Text>
                <TextInput style={styles.input} secureTextEntry placeholder="Tối thiểu 6 ký tự" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Xác nhận mật khẩu mới</Text>
                <TextInput style={styles.input} secureTextEntry placeholder="Nhập lại mật khẩu mới" />
              </View>

              <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>CẬP NHẬT MẬT KHẨU</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* TAB 3: ĐƠN HÀNG */}
        {tab === 'orders' && (
          <View style={{ paddingTop: 16 }}>
            <View style={styles.orderItem}>
              <View style={styles.orderTopRow}>
                <View>
                  <Text style={styles.orderId}>#ORD_0001ABCD</Text>
                  <Text style={styles.orderDate}>14:30 12/10/2026</Text>
                </View>
                <View style={[styles.orderStatusBadge, { backgroundColor: COLORS.successSoft }]}>
                  <Text style={[styles.orderStatusText, { color: COLORS.success }]}>Đã thanh toán</Text>
                </View>
              </View>
              <View style={styles.orderDivider} />
              <View style={styles.productRow}>
                <Text style={styles.productName}>• Áo thun Nam Cotton Compact</Text>
                <Text style={styles.productQty}>x2</Text>
              </View>
              <View style={styles.orderFooter}>
                <Text style={styles.orderTotalLabel}>Tổng tiền:</Text>
                <Text style={styles.orderTotal}>250.000đ</Text>
              </View>
            </View>
          </View>
        )}

        {/* Nút đăng xuất */}
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Đăng xuất tài khoản</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}