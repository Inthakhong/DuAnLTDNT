
import { StyleSheet } from 'react-native';

// ============ BẢNG MÀU CHUNG CỦA APP ============
export const COLORS = {
  primary: '#087DBD',       // Xanh dương chủ đạo (tone của bạn)
  primaryDark: '#0565F5',   // Xanh đậm hơn cho nút
  primaryLight: '#DCECF7',  // Xanh nhạt cho subtitle
  background: '#087DBD',    // Nền xanh (dùng cho auth screens)
  white: '#FFFFFF',
  black: '#000000',
  textPrimary: '#222222',
  textSecondary: '#777777',
  border: '#BBBBBB',
  inputBg: '#FFFFFF',
  link: '#1769E8',          // Màu link
  danger: '#F02B2B',        // Màu đỏ (quên mk, cảnh báo)
  success: '#27AE60',
};

// ============ KÍCH THƯỚC CHUNG ============
export const SIZES = {
  padding: 16,
  radius: 12,
  radiusRound: 25,
  fontSmall: 14,
  fontMedium: 15,
  fontLarge: 20,
  fontTitle: 23,
};

// ============ STYLE DÙNG CHUNG TOÀN APP ============
export const GlobalStyles = StyleSheet.create({
  // ---------- Container ----------
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.white,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: COLORS.background,
  },

  // ---------- LOGO AREA (dùng cho login/register) ----------
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
  },
  cartCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cartIcon: {
    fontSize: 28,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: 'bold',
  },
  logoSubText: {
    color: COLORS.primaryLight,
    fontSize: 14,
    marginTop: 3,
  },

  // ---------- BOX TRẮNG (khung login/register) ----------
  box: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: 25,
    alignSelf: 'center',
  },

  // ---------- TIÊU ĐỀ ----------
  title: {
    textAlign: 'center',
    fontSize: 21,
    color: COLORS.textPrimary,
    marginBottom: 35,
    fontWeight: 'bold',
  },

  // ---------- INPUT ----------
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radiusRound,
    paddingHorizontal: 15,
    fontSize: SIZES.fontMedium,
    marginBottom: 18,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.white,
  },

  // ---------- NÚT CHÍNH ----------
  button: {
    height: 46,
    backgroundColor: COLORS.primaryDark,
    borderRadius: SIZES.radiusRound,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: 'bold',
  },

  // ---------- LINK ----------
  forgot: {
    color: COLORS.danger,
    textAlign: 'center',
    marginTop: 16,
    fontSize: SIZES.fontSmall,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  normalText: {
    color: COLORS.textPrimary,
    fontSize: SIZES.fontSmall,
  },
  linkText: {
    color: COLORS.link,
    fontWeight: 'bold',
    fontSize: SIZES.fontSmall,
  },
});