import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const navigation = useNavigation();

  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('AddressScreen');
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):
              <Text style={{color: 'red'}}> ${totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text="Proceed to chekout"
              onPress={onCheckout}
              containerStyles={{backgroundColor: 'khaki'}}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
});

export default ShoppingCartScreen;
