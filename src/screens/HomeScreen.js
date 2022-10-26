import {Dimensions, ScrollView, View} from 'react-native';
import React from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
  return (
    <View>
      {/* header */}
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Dimensions.get('screen').height * 0.2,
        }}>
        <Categories />
        <FeaturedRow
          title="Featured One"
          description="This is description text for featured row one"
        />
        <FeaturedRow
          title="Featured Two"
          description="This is description text for featured row two"
        />
        <FeaturedRow
          title="Featured Three"
          description="This is description text for featured row three"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
