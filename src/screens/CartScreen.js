import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/slices/restaurant-slice';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../redux/slices/cart-slice';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {colors} from '../constants/colors';

const CartScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(groupedItems);
  }, [items]);
  console.log(groupedItems);
  return (
    <View className="bg-gray-100 flex-1">
      <View className="bg-white p-5 flex-row items-center">
        <View className="flex-1">
          <Text className="text-lg font-bold text-center text-black">
            Basket
          </Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          className="rounded-full bg-gray-100">
          <XCircleIcon color={colors.primary} size={40} />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-4 bg-white px-4 py-3 my-5">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="w-7 h-7 p-4 bg-gray-300 rounded-full"
        />
        <Text className="flex-1 text-black">Deliver in 50-60 min</Text>
        <TouchableOpacity>
          <Text className="text-[#00ccbb]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItems).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text>{items.length}x</Text>
            <Image
              source={{
                uri: items?.[0].image,
              }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1 text-black">{items?.[0].title}</Text>
            <Text className="text-gray-600">ETB {items?.[0].price}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => dispatch(removeFromCart({id: key}))}>
              <Text className="text-[#00ccbb]">Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row items-center justify-between ">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">ETB {total}</Text>
        </View>
        <View className="flex-row items-center justify-between ">
          <Text className="text-gray-400">Delivery</Text>
          <Text className="text-gray-400">ETB {20.99}</Text>
        </View>
        <View className="flex-row items-center justify-between ">
          <Text className="text-black">Order</Text>
          <Text className="text-black font-extrabold">ETB {total + 20.99}</Text>
        </View>
        <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
