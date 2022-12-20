import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cccccc',
    backgroundColor: 'white',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    marginRight: 1,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
});

export default styles;
