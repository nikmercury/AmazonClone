import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: [string];
    avgRating: number;
    ratings?: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const mainImage = item.image[0];

  const onPress = () => {
    console.warn('item pressed');
    navigation.navigate('ProductScreen', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: mainImage}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Rating */}
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              style={styles.star}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
