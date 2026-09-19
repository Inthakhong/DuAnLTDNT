import { StyleSheet, Text, View } from 'react-native';
interface Student {
  name: string;
  mssv: number;
  Lop: string;
}

function ThongTinSV(props: Student){
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Thông tin sinh viên</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Họ và tên: {props.name}</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>MSSV: {props.mssv}</Text>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Lớp: {props.Lop}</Text>
    </View>
  )
}

export default function MyApp() {
  return (
    <View>
      <ThongTinSV name="chansyda" mssv={239043349} Lop="CNTT K23" />
      <ThongTinSV name="tran thi b" mssv={987654321} Lop="CNTT K62" />
      <ThongTinSV name="Lê Văn C" mssv={456789123} Lop="CNTT K62" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20, 
  },
});