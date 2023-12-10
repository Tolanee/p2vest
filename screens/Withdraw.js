import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Notification from '../assets/svgs/Notification';
import {Plus} from '../assets/svgs/WalletSvgs';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '../components/BottomSheet';
import TransactionSummary from '../components/TransactionSummary';

const banks = [
  {
    name: 'Ajalla Ugo',
    account: '9102356712',
    bank: 'Access Bank',
    selected: false,
  },
  {
    name: 'Ajalla Ugo',
    account: '9102356712',
    bank: 'Access Bank',
    selected: false,
  },
];
export default function Withdraw() {
  const navigation = useNavigation();
  const [selectedBanks, setSelectedBanks] = useState([...banks]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckboxToggle = index => {
    const updatedBanks = selectedBanks.map((bank, i) => {
      if (i === index) {
        // Toggle the selected state for the clicked checkbox
        return {...bank, selected: !bank.selected};
      } else {
        // Unselect other checkboxes
        return {...bank, selected: false};
      }
    });

    setSelectedBanks(updatedBanks);
  };

  return (
    <SafeAreaView className="flex-1">
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
        <View className="flex flex-row justify-between mt-3">
          <Text className="text-textGre font-medium text-lg">Your Balance</Text>
          <Text
            style={{fontFamily: 'PTMono-Regular'}}
            className=" font-medium font-mono text-3xl">
            {'\u20A6'}120,000
          </Text>
        </View>
        <View className="mt-3">
          <Text className="text-primary text-2xl font-bold">Withdraw</Text>
          <Text className="text-textGray font-medium text-lg">Amount</Text>
          <View className="w-full bg-softGreen p-4 flex items-center justify-center rounded-lg border-1 border-primary border">
            <Text
              className="text-textGray font-medium font-mono text-lg"
              style={{fontFamily: 'PTMono-Regular'}}>
              20,000
            </Text>
          </View>
        </View>
        <View>
          <View className="flex flex-row justify-between my-4">
            <Text className="text-textGray font-medium text-sm">
              Select Bank
            </Text>
            <View className="flex flex-row space-x-1 items-center">
              <Plus />
              <Text className=" text-textGray font-medium  text-sm">
                Add New Bank
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 ">
          {selectedBanks.map((bank, index) => (
            <TouchableOpacity
              key={index}
              style={{backgroundColor: bank.selected ? '#E5F4F3' : '#F2F2F2'}}
              className="flex flex-row items-center my-2  rounded-lg bg-softGreen p-5"
              onPress={() => handleCheckboxToggle(index)}>
              <View
                style={{
                  backgroundColor: '#E5F4F3',
                  borderRadius: 50,
                  height: 20,
                  width: 20,
                  borderColor: '#1293A9',
                  borderWidth: 2,
                }}>
                <View
                  style={{
                    backgroundColor: bank.selected ? '#1293A9' : '#d1d5db',
                    marginTop: 3,
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                    borderColor: '#fff',
                    alignSelf: 'center',
                  }}
                />
              </View>
              <View className="flex flex-row justify-between  flex-1">
                <View>
                  <Text className="text-textGray font-bold text-lg ml-2">
                    {bank.name}
                  </Text>
                  <Text className="text-textGre text-xs ml-2">
                    {bank.account}
                  </Text>
                </View>
                <View>
                  <Text className="text-textGrey  text-sm ml-2">Bank</Text>
                  <Text className="text-textGre text-xs ml-2">{bank.bank}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="mx-6">
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}
          className="p-[14px]  bg-primary rounded-lg my-2  flex items-center justify-center">
          <Text className="text-white">Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wallet');
          }}
          className="p-[14px]  bg-buttonGray rounded-lg my-3  flex items-center justify-center">
          <Text className="text-white">Cancel</Text>
        </TouchableOpacity>
      </View>

      {modalOpen && (
        <BottomSheet
          open={modalOpen}
          onClose={setModalOpen}
          isDraggable={true}
          isPressable={true}
          height={450}>
          <TransactionSummary />
        </BottomSheet>
      )}
    </SafeAreaView>
  );
}
