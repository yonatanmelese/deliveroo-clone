import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowLongRightIcon} from 'react-native-heroicons/outline';
import {colors} from '../constants/colors';
import RestaurantCard from './RestaurantCard';
import client, {urlFor} from '../api/sanity';

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  const [restaurants, setRestaurants] = useState([]);
  const fetchRestaurants = async () => {
    const response = await client.fetch(
      `
      *[_type == "featured" && _id == $id ]{
        restaurants[]->{
          ...,
          dishes[]->,
      type->{
            name
          }
        }
      }[0]
    `,
      {id},
    );
    setRestaurants(response.restaurants);
  };
  useEffect(() => {
    fetchRestaurants();
  }, [id]);
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
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            image={urlFor(restaurant.image).url()}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.lat}
            lat={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
