import {View, Text, TouchableOpacity} from 'react-native';

export default function TransactionSummary() {
  return (
    <View className="flex-1 mx-6 relative ">
      <View className="flex  items-center">
        <Text className="text-textGre  text-2xl font-bold">
          Transaction Summary
        </Text>
        <Text className="text-textGre font-medium text-sm ">
          Please review the details of your transaction
        </Text>
      </View>

      <View className="mt-5">
        <View className="flex flex-row justify-between mt-3 py-1 border-b border-b-textGray">
          <Text className="text-textGre font-medium  ">Transaction Type</Text>
          <Text className="text-textGre font-bold font-mono text-lg ">
            50,000
          </Text>
        </View>
        <View className="flex flex-row justify-between mt-3 py-1 border-b border-b-textGray">
          <Text className="text-textGre font-medium  ">Amount</Text>
          <Text className=" text-textGre font-bold font-mono text-lg ">25</Text>
        </View>
        <View className="flex flex-row justify-between mt-3 py-1 border-b border-b-textGray">
          <Text className="text-textGre font-medium  ">Fee</Text>
          <Text className="text-textGre font-bold font-mono text-lg ">
            50,025
          </Text>
        </View>
      </View>

      <View className=" absolute bottom-4 w-full">
        <TouchableOpacity className="p-[14px]  bg-primary rounded-lg my-2  flex items-center justify-center">
          <Text className="text-white">Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-[14px]  bg-buttonGray rounded-lg my-3  flex items-center justify-center">
          <Text className="text-white">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
