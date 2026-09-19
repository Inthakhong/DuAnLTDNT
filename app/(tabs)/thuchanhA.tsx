import { Text, View } from 'react-native';

export default function MyApp() {
  const score = 10; // const giá trị mặc định ko thể đổi; 
  let xeploai = ''; // let thì có thể đổi giá trị như ví dụ sau 

  if(score >= 9) {
    xeploai = 'xuat sac';
  } else if(score >= 8){
    xeploai = 'Gioi';
  } else if(score >= 7){
    xeploai = 'Kha';
  } else if(score >= 5){
    xeploai = 'Trung binh';
  }else {
    xeploai = 'Yeu';
  }

  return (
    <View>
      {score && <Text>Điểm của bạn là : {score}</Text>}
      <Text>Xếp loại: {xeploai}</Text>
    </View>
  );
}