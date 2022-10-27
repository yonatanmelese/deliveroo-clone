import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {urlFor} from '../api/sanity';

const CategoryCard = ({title, image}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} className="relative mr-2">
      <Image
        source={{
          uri: urlFor(image).url(),
        }}
        className="h-20 w-20 rounded"
      />
      <View className="absolute bottom-0 left-0 h-1/2 w-full bg-black/40 flex items-center justify-center px-1">
        <Text numberOfLines={1} className="text-white font-semibold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
