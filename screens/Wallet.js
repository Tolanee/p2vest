import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Notification from '../assets/svgs/Notification';
import {
  ArrowDown,
  ArrowUp,
  Topup,
  WalletIcon,
  Withdraw,
} from '../assets/svgs/WalletSvgs';
import {useNavigation} from '@react-navigation/native';

export default function Wallet() {
  const navigation = useNavigation();
  const transactions = [
    {
      id: 1,
      type: 'Account Top Up',
      amount: '50,000',
      date: '24 Oct. 2020 8:45pm',
      icon: <ArrowDown />,
    },
    {
      id: 2,
      type: 'Rent Payment',
      amount: '-50,000',
      date: '24 Oct. 2020 8:45pm',
      icon: <ArrowUp />,
    },
    {
      id: 3,
      type: 'Rent Payment',
      amount: '50,000',
      date: '24 Oct. 2020 8:45pm',
      icon: <ArrowDown />,
    },
  ];
  return (
    <SafeAreaView className="bg-[#FFF]  flex-[1.5]">
      <View className="flex-1 mx-6">
        <View className="flex flex-row justify-between mt-10">
          <View className="flex flex-row items-center space-x-2">
            <View className="w-12 h-12 ">
              <Image
                source={require('../assets/User.png')}
                className="w-full h-full rounded-full"
              />
            </View>

            <Text className="text-textGray font-bold text-lg"> Ajalla Ugo</Text>
          </View>
          <View className="w-11 h-11 bg-[#E5F4F3] flex items-center justify-center rounded-lg">
            <Notification />
          </View>
        </View>

        <View className="bg-[#1293A9] w-full h-40 mt-4 rounded-xl p-5 flex justify-between">
          <View className="flex flex-row justify-between  ">
            <View>
              <Text
                className="text-white text-3xl font-mono"
                style={{fontFamily: 'Roboto-Bold'}}>
                120,000
              </Text>
              <Text className="text-white text-sm">Balance</Text>
            </View>
            <View>
              <WalletIcon />
            </View>
          </View>
          <View className="flex flex-row justify-between">
            <View>
              <Text className=" text-white text-[9px]">Account Number</Text>
              <Text
                className="text-white text-sm font-roboto-bold"
                style={{fontFamily: 'PTMono-Regular'}}>
                9102356712
              </Text>
            </View>
            <View>
              <Text className="text-white text-[9px]">Bank</Text>
              <Text className="text-white text-sm">Access Bank</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between mt-4">
          <TouchableOpacity className="flex flex-row p-3 bg-[#E5F4F3] space-x-1 rounded-lg">
            <Topup />
            <Text className="text-textGray text-sm font-medium">
              Top Up Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row p-3 bg-[#E5F4F3] space-x-1 rounded-lg"
            onPress={() => {
              navigation.navigate('Withdraw');
            }}>
            <Withdraw />
            <Text>
              <Text className="text-textGray text-sm font-medium">
                Withdraw Funds
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*Transactions*/}
      <View className="flex-[0.9] bg-[#F2F2F2]  w-full rounded-t-3xl">
        <View className="flex flex-row justify-between m-5">
          <Text className="text-textGray font-medium text-sm">
            Last Transactions
          </Text>
          <Text className="text-primary text-xs font-medium">See All</Text>
        </View>
        <View className="mx-5">
          {transactions.map((trans, index) => {
            return (
              <View key={index} className="flex flex-row justify-between my-4">
                <View className={'flex flex-row space-x-2'}>
                  <View>{trans.icon}</View>
                  <View>
                    <Text className="text-textGray text-sm font-medium">
                      {trans.type}
                    </Text>
                    <Text className="text-textGray text-[10px]">
                      {trans.date}
                    </Text>
                  </View>
                </View>

                <Text className="text-textGray text-sm font-medium">
                  {trans.amount}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
