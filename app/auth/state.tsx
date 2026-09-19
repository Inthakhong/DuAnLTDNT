import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Student {
  name: string;
  mssv: number;
  lop?: string;
  status: 'active' | 'inactive' | 'graduated';
}

function ThongTinSV(props: Student) {
  const [status, setStatus] = useState(props.status);
  const [count, setCount] = useState(0);
  
  const handleStatusChange = () => {
    if (status === 'active') {
      setStatus('inactive');
    } else if (status === 'inactive') {
      setStatus('graduated');
    } else {
      setStatus('active');
    }
  };

  return (
    <Pressable style={styles.card} onPress={() => setCount(count + 1)}>
      <Pressable 
        style={[styles.statusButton, styles[status]]}
        onPress={(e) => {
          e.stopPropagation();
          handleStatusChange();
        }}
      >
        <Text style={styles.statusText}>
          {status}
        </Text>
      </Pressable>

      {/* Chỉ hiển thị mỗi biến đếm (số) ở đây */}
      <Text style={styles.countText}>{count}</Text>

      <Text style={styles.title}>Thông tin sinh viên</Text>

      <Text style={styles.info}>
        Họ và tên: <Text style={styles.value}>{props.name}</Text>
      </Text>

      <Text style={styles.info}>
        MSSV: <Text style={styles.value}>{props.mssv}</Text>
      </Text>

      <Text style={styles.info}>
        Lớp: <Text style={styles.value}>{props.lop}</Text>
      </Text>
    </Pressable>
  );
}

export default function MyApp() {
  return (
    <View style={styles.appContainer}>
      <ThongTinSV name="channe" mssv={123456789} lop="CNTT K62" status="active" />
      <ThongTinSV name="Trần Thị B" mssv={987654321} lop="CNTT K62" status="inactive" />
      <ThongTinSV name="Lê Văn C" mssv={456789123} lop="CNTT K62" status="graduated" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 1,
    color: '#000',
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#130202',
    marginBottom: 5,
  },
  value: {
    fontWeight: 'normal',
    color: '#000',
  },
  statusButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 5,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  countText: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#0044ff',
  },
  inactive: {
    backgroundColor: '#0044ff',
  },
  graduated: {
    backgroundColor: '#0044ff',
  },
});