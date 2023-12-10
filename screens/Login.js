import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {fonts} from '../font';
import LoginInputs from '../components/LoginInputs';

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-[#E5F4F3] relative">
      <ImageBackground
        source={require('../assets/Group1.png')}
        className="w-full h-full object-cover">
        <View className="flex-[2] flex item-center justify-center mt-14">
          <Text className=" text-base text-[#6D6767] mx-10">
            Login to your Account{' '}
          </Text>
          <LoginInputs />
        </View>
        <View className="flex-[0.5] flex items-center">
          <Text className=" text-[#6D6767] absolute bottom-6 ">
            Dont have an account?
            <Text className="text-[#1293A9] "> Sign Up</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
