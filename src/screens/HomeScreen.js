import {Dimensions, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../api/sanity';
const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const fetchFeaturedCategories = async () => {
    const response = await client.fetch(`*[_type == "featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }`);
    setFeaturedCategories(response);
  };
  useEffect(() => {
    fetchFeaturedCategories();
  }, []);

  return (
    <View>
      {/* header */}
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Dimensions.get('screen').height * 0.2,
        }}>
        <Categories />
        {featuredCategories.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
