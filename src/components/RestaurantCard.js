import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RestaurantScreen', {
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
        })
      }
      activeOpacity={0.6}
      className="bg-white shadow-sm mr-3">
      <Image source={{uri: image}} className="h-36 w-full rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-black">{title}</Text>
        <View className="flex-row items-center space-x-1 my-1">
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;
