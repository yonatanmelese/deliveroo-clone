import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';

import {
  MapPinIcon,
  StarIcon,
  ArrowLongLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import {colors} from '../constants/colors';
import {QuestionMarkCircleIcon} from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import {urlFor} from '../api/sanity';
import CartSummary from '../components/CartSummary';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../redux/slices/restaurant-slice';

const RestaurantScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    params: {
      id,
      image,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        image,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat,
      }),
    );
  }, []);
  return (
    <>
      <CartSummary />
      <ScrollView>
        <View className="relative">
          <Image source={{uri: image}} className="w-full h-56 bg-gray-300" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
            className="bg-gray-100 absolute top-10 left-5 rounded-full p-2">
            <ArrowLongLeftIcon color={colors.primary} size={27} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold text-black">{title}</Text>
            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-gray-500">
                  <Text className="text-green-900/70">{rating}</Text> • {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-gray-500">
                  Nearby •{' '}
                  {address.length > 20 ? address.slice(0, 20) + '...' : address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-100">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-grow text-md font-bold text-black">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View className="pb-32">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-black">
            Menu
          </Text>
          {dishes.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              title={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={urlFor(dish.image).url()}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
