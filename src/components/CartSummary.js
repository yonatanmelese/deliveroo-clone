import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../redux/slices/cart-slice';
import {useNavigation} from '@react-navigation/native';

const CartSummary = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <View className="absolute w-full bottom-10 z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        activeOpacity={0.6}
        className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">ETB {total}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSummary;
