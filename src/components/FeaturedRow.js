import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ArrowLongRightIcon} from 'react-native-heroicons/outline';
import {colors} from '../constants/colors';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, featuredCategory}) => {
  return (
    <View>
      <View className="flex-row justify-between px-4 mt-5">
        <View>
          <Text className="font-bold text-lg text-black">{title}</Text>
          <Text className="text-gray-500">{description}</Text>
        </View>
        <ArrowLongRightIcon color={colors.primary} />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCard
          id={1}
          image="https://links.papareact.com/gn7"
          title="Injera"
          rating={4.7}
          genre="Ethiopian"
          address="Gonder 123 Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={10}
          lat={20}
        />
        <RestaurantCard
          id={1}
          image="https://links.papareact.com/gn7"
          title="Injera"
          rating={4.7}
          genre="Ethiopian"
          address="Gonder 123 Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={10}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
