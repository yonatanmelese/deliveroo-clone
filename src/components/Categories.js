import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from './CategoryCard';
import client from '../api/sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await client.fetch(`*[_type == "category"]`);
    setCategories(response);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      {categories.map(category => (
        <CategoryCard
          key={category._id}
          title={category.name}
          image={category.image}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
