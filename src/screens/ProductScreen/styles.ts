import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  title: {},
  price: {
    fontSize: 18,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
