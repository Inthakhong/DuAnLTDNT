import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Khai báo kiểu dữ liệu cho sách
interface BookItem {
  id: number;
  title: string;
  author: string;
  category: string;
  status: 'active' | 'inactive';
}

// Dữ liệu ban đầu gồm 6 cuốn sách
const initialBooks: BookItem[] = [
  { id: 1, title: 'Lập trình C', author: 'Nguyễn Văn A', category: 'Lập trình', status: 'active' },
  { id: 2, title: 'Lập trình Java', author: 'Trần Văn B', category: 'Lập trình', status: 'active' },
  { id: 3, title: 'React Native cơ bản', author: 'Lê Văn C', category: 'Di động', status: 'active' },
  { id: 4, title: 'Cơ sở dữ liệu', author: 'Phạm Văn D', category: 'Cơ sở dữ liệu', status: 'active' },
  { id: 5, title: 'Mạng máy tính', author: 'Hoàng Văn E', category: 'Mạng', status: 'active' },
  { id: 6, title: 'Cấu trúc dữ liệu', author: 'Nguyễn Văn F', category: 'Lập trình', status: 'active' },
];

// ==========================================
// COMPONENT TÁI SỬ DỤNG (BookCard)
// ==========================================
interface BookCardProps {
  title: string;
  author: string;
  category: string;
  status?: 'active' | 'inactive';
  showStatusButton?: boolean;
  onToggleStatus?: () => void;
}

function BookCard({ 
  title, 
  author, 
  category, 
  status, 
  showStatusButton = false, 
  onToggleStatus 
}: BookCardProps) {
  return (
    <View style={styles.card}>
      {showStatusButton && (
        <Pressable 
          style={[styles.statusButton, status === 'active' ? styles.activeBg : styles.inactiveBg]}
          onPress={onToggleStatus}
        >
          <Text style={styles.statusText}>{status}</Text>
        </Pressable>
      )}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>
        Tác giả: <Text style={styles.value}>{author}</Text>
      </Text>
      <Text style={styles.info}>
        Thể loại: <Text style={styles.value}>{category}</Text>
      </Text>
    </View>
  );
}

// ==========================================
// COMPONENT CHÍNH CỦA ỨNG DỤNG
// ==========================================
export default function MyApp() {
  const [books, setBooks] = useState<BookItem[]>(initialBooks);

  const toggleBookStatus = (id: number) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === 'active' ? 'inactive' : 'active' }
          : book
      )
    );
  };

  return (
    <ScrollView style={styles.appContainer}>
      {/* ================= PHẦN 1: HIỂN THỊ DANH SÁCH ================= */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>1. Phần Hiển Thị Danh Sách (6 cuốn)</Text>
        
        {books.map((item) => (
          <BookCard 
            key={'display-' + item.id}
            title={item.title}
            author={item.author}
            category={item.category}
            status={item.status}
            showStatusButton={true}
            onToggleStatus={() => toggleBookStatus(item.id)}
          />
        ))}
      </View>

      {/* ================= PHẦN 2: QUẢN LÝ DANH SÁCH ================= */}
      <View style={[styles.sectionContainer, { marginTop: 25 }]}>
        <Text style={styles.sectionHeader}>2. Phần Quản Lý Danh Sách</Text>

        {books
          .filter((item) => item.status === 'active')
          .map((item) => (
            <BookCard 
              key={'manage-' + item.id}
              title={item.title}
              author={item.author}
              category={item.category}
              showStatusButton={false}
            />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 15,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontWeight: 'normal',
    color: '#000',
  },
  statusButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 5,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  activeBg: {
    backgroundColor: '#0044ff',
  },
  inactiveBg: {
    backgroundColor: '#0044ff',
  },
});