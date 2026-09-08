import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const courses = [
  { id: '1', name: 'Lập trình Python', image: 'https://tse1.mm.bing.net/th/id/OIP.Uqm_qK8cl-3CUWQFkWZ8OwHaEo?r=0&pid=Api&P=0&h=180' },
  { id: '2', name: 'HTML & CSS', image: 'https://tse1.mm.bing.net/th/id/OIP.TNKdpuWZA7OawSCXzykRMAHaDe?r=0&pid=Api&P=0&h=180' },
  { id: '3', name: 'Tiếng Anh', image: 'https://tse2.mm.bing.net/th/id/OIP.tQaCgCwzW8hOTrISXKRq0QHaFO?r=0&pid=Api&P=0&h=180' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>StudyGo 📚</Text>
          <Text style={{fontSize: 20}}>🔔</Text>
        </View>

        {/* THÔNG TIN CHÍNH  */}
       <View style={styles.banner}>
  {/* Gom tất cả chữ và nút vào một khối bọc để căn giữa chuẩn */}
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={styles.bigText}>
          Học mọi lúc,{'\n'}mọi nơi
        </Text>
        <Text style={{ color: '#333', textAlign: 'center', marginBottom: 15 }}>
          Học tập dễ dàng mỗi ngày
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => alert('Bắt đầu học')}
        >
          <Text style={styles.buttonText}>Bắt đầu học</Text>
        </Pressable>
      </View>
      
      <Image
        source={{ uri: 'https://picsum.photos/150' }}
        style={styles.mainImage}
      />
    </View>

        {/* KHU VỰC 3 KHÓA HỌC (Được căn giữa màn hình) */}
        <View style={styles.centerSection}>
          <Text style={styles.heading}>Khóa học đề xuất ⭐</Text>

          <FlatList
            data={courses}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.courseImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.courseName}>
                    {item.name}
                  </Text>
                  <Pressable
                    style={styles.smallButton}
                    onPress={() => alert('Bạn chọn ' + item.name)}
                  >
                    <Text style={styles.buttonText}>Học ngay</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',   
    backgroundColor: '#DDE7FF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  bigText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#4267B2',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Khối bọc riêng cho phần khóa học để căn giữa trên màn hình lớn/web
  centerSection: {
    width: '100%',
    maxWidth: 750,       // Giới hạn độ rộng vừa phải
    alignSelf: 'center', // Căn giữa tuyệt đối phần này
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: { 
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    alignItems: 'center',
    gap: 15,
  },
  courseImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  courseName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  smallButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
});