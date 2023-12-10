import {View, Text, Image} from 'react-native';

export default function Splash() {
  return (
    <View className="flex-1 w-full h-full ">
      <Image
        source={require('../assets/HomePage.png')}
        className="object-cover w-full h-full"
      />
    </View>
  );
}
