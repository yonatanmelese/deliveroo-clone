import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {colors} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemById,
  selectCartItems,
} from '../redux/slices/cart-slice';

const DishRow = ({id, title, description, price, image}) => {
  const [isPressed, setisPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => selectCartItemById(state, id));
  const addToBasket = () => {
    dispatch(
      addToCart({
        id,
        title,
        description,
        price,
        image,
      }),
    );
  };
  const removeFromBasket = () => {
    dispatch(removeFromCart({id}));
  };
  return (
    <TouchableOpacity
      onPress={() => setisPressed(old => !old)}
      activeOpacity={0.6}
      className="bg-white border border-gray-100 p-4">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1 text-black">{title}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">ETB {price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
      {isPressed && (
        <View className="flex-row items-center space-x-3 mt-3">
          <TouchableOpacity disabled={!items.length} onPress={removeFromBasket}>
            <MinusCircleIcon
              color={items.length > 0 ? colors.primary : 'gray'}
              size={32}
            />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addToBasket}>
            <PlusCircleIcon color={colors.primary} size={32} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishRow;
