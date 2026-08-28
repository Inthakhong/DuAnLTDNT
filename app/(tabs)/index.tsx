import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function MyApp() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/icon.png')}
        style= {styles.avatar}
      />
      <Text style={styles.title}>Thông tin sinh viên</Text>
      <FlatList
        data={[
          { id: '1', name: 'Nguyễn Văn An', mssv: '233345678', lop: 'CNTT K23', ngaysinh: '01/01/2000', diachi: '98A Đường Phan Bội Châu, Đak Lak, BMT' },
          { id: '2', name: 'Trần Thị Bích Ngọc', mssv: '209568438', lop: 'TCNH K20', ngaysinh: '02/05/2002', diachi: '456 Đường Lê duẩn, Đak Lak, BMT' },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Họ và tên: {item.name}</Text>
            <Text>MSSV: {item.mssv}</Text>
            <Text>Lớp: {item.lop}</Text>
            <Text>Ngày sinh: {item.ngaysinh}</Text>
            <Text>Địa chỉ: {item.diachi}</Text>
          </View>
        )}
      />
        
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  listItem: {
    marginBottom: 10,
  },
});