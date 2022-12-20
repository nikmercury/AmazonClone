import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
    backgroundColor: '#e47911',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
