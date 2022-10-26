import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const CategoryCard = ({title, image}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: image,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
