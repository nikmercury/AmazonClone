import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity(value: number): void;
}

const QuantitySelector = ({quantity, setQuantity}: QuantitySelectorProps) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySelector;
