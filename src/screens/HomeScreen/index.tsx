import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
import {DataStore} from '@aws-amplify/datastore';
import {Product} from '../../models';
import '@azure/core-asynciterator-polyfill';

const HomeScreen = ({searchValue}: {searchValue: String}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
});

export default HomeScreen;
