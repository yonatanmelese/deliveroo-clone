import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {colors} from '../constants/colors';

const PreparingOrderScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('DeliveryScreen');
    }, 4000);
  }, []);
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Animatable.Image
        source={require('../assets/loading.gif')}
        className="h-96 w-96"
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        className="text-lg mb-5"
        animation="slideInUp"
        iterationCount={1}>
        Waiting for restaurant to accept your order.
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={colors.primary} />
    </View>
  );
};

export default PreparingOrderScreen;
