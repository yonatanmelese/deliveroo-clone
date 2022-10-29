import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {XMarkIcon} from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';
import MapboxGL from '@rnmapbox/maps';

import {ACCESS_TOKEN} from '@env';
import {colors} from '../constants/colors';
import {selectRestaurant} from '../redux/slices/restaurant-slice';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(ACCESS_TOKEN);

const DeliveryScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant);
  const [coordinates] = useState([restaurant.lat, restaurant.long]);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <View className="flex-row items-center justify-between p-5">
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('HomeScreen')}>
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="text-white text-lg">Order Help</Text>
      </View>
      <View
        style={{
          elevation: 5,
        }}
        className="bg-white mx-5 my-2 rounded-md p-6 z-50">
        <View className="flex-row justify-between">
          <View>
            <Text className="text text-gray-400">Estimated Arrival</Text>
            <Text className="text-2xl font-bold text-black">45-55 Minutes</Text>
          </View>
          <Image
            source={{
              uri: 'https://links.papareact.com/fls',
            }}
            className="h-20 w-20"
          />
        </View>
        <Progress.Bar size={30} indeterminate={true} color={colors.primary} />
        <Text className="mt-3 text-gray-500">
          Your order at {restaurant.title} is being prepared.
        </Text>
      </View>
      <MapboxGL.MapView
        styleURL="mapbox://styles/yonime/cl9u7a5z1003v14o4v6rqpzsy"
        className="flex-1 -mt-10">
        <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
        <MapboxGL.PointAnnotation
          coordinate={coordinates}
          title={restaurant.short_description}
        />
      </MapboxGL.MapView>
      <View className="bg-white flex-row items-center py-5 space-x-3">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-12 w-12 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg text-black">Yonatan</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </View>
    </View>
  );
};

export default DeliveryScreen;
