import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>🛒 DIGITAL RESOURCES</Text>
          <Text style={styles.subtitle}>Digital Marketplace</Text>
        </View>
      </View>

      {/* TÌM KIẾM */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm tài nguyên..."
          placeholderTextColor="#777"
          underlineColorAndroid="transparent"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* BANNER */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>
            Tài nguyên số
          </Text>

          <Text style={styles.bannerText}>
            Công cụ hữu ích cho học tập và công việc
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => alert('Khám phá ngay')}
          >
            <Text style={styles.buttonText}>
              Khám phá ngay
            </Text>
          </Pressable>
        </View>

        <Image
          source={{ uri: 'https://picsum.photos/150' }}
          style={styles.bannerImage}
        />
      </View>

      {/* SẢN PHẨM */}
      <Text style={styles.title}>
        Tài nguyên nổi bật ⭐
      </Text>

      <View style={styles.products}>

        {/* SẢN PHẨM 1 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.XWXp9GoIN_46RNjjFH3sIAHaEK?r=0&pid=Api&P=0&h=180' }}
            style={styles.image}
          />
          <Text style={styles.name} numberOfLines={1}>Canva Pro</Text>
          <Text style={styles.price}>55.000đ</Text>

          <Pressable style={styles.smallButton}>
            <Text style={styles.buttonText}>Xem ngay</Text>
          </Pressable>
        </View>

        {/* SẢN PHẨM 2 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.hMkMwnH22ZyPLdxAbM89twHaEz?r=0&pid=Api&P=0&h=180' }}
            style={styles.image}
          />
          <Text style={styles.name} numberOfLines={1}>Template CV</Text>
          <Text style={styles.price}>35.000đ</Text>

          <Pressable style={styles.smallButton}>
            <Text style={styles.buttonText}>Xem ngay</Text>
          </Pressable>
        </View>

        {/* SẢN PHẨM 3 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://tse1.mm.bing.net/th/id/OIP.eytMCWbxzq5A7ft-gI2uiAHaFj?r=0&pid=Api&P=0&h=180' }}
            style={styles.image}
          />
          <Text style={styles.name} numberOfLines={1}>File Excel</Text>
          <Text style={styles.price}>39.000đ</Text>

          <Pressable style={styles.smallButton}>
            <Text style={styles.buttonText}>Xem ngay</Text>
          </Pressable>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F83BD',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    marginTop: 4,
  },
  searchBox: {
    width: '50%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    flex:1,
    fontSize: 15,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: '#0F83BD',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bannerText: {
    color: '#666',
    marginTop: 5,
  },
  bannerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0867F2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  smallButton: {
    backgroundColor: '#0867F2',
    padding: 7,
    borderRadius: 7,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Giúp các item tự động xuống dòng nếu có nhiều hơn
  },
  card: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 7,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 7,
  },
  price: {
    color: '#0F83BD',
    fontWeight: 'bold',
    marginTop: 4,
  },
});