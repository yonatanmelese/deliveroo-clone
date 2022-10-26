import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {colors} from '../constants/colors';

const Header = () => {
  return (
    <View className="p-3 bg-white">
      <View className="flex-row space-x-2 items-center ">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-10 w-10 object-contain bg-gray-300 rounded-full"
        />
        <View className="flex-grow">
          <Text className="text-gray-400 font-bold">Deliver now</Text>
          <View className="flex-row space-x-1 items-center">
            <Text className="font-bold text-xl text-black">
              Current Location
            </Text>
            <ChevronDownIcon size={25} color={colors.primary} />
          </View>
        </View>
        <UserIcon size={25} color={colors.primary} />
      </View>
      <View className="flex-row items-center justify-between space-x-2 mt-5">
        <View className="bg-gray-100 flex-row items-center px-3 space-x-3 w-[86vw]">
          <MagnifyingGlassIcon size={25} color={colors.gray} />
          <TextInput
            className="flex-1"
            placeholder="Restaurants and Cuisines"
          />
        </View>
        <AdjustmentsVerticalIcon size={25} color={colors.primary} />
      </View>
    </View>
  );
};

export default Header;
