import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <CategoryCard title="Titile 1" image="https://links.papareact.com/gn7" />
      <CategoryCard title="Titile 2" image="https://links.papareact.com/gn7" />
      <CategoryCard title="Titile 3" image="https://links.papareact.com/gn7" />
      <CategoryCard title="Titile 4" image="https://links.papareact.com/gn7" />
      <CategoryCard title="Titile 5" image="https://links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Categories;
