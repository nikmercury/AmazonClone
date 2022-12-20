import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 20}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dotsContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? 'grey' : 'lightgrey',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    marginHorizontal: 10,
    height: 400,
    resizeMode: 'contain',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ImageCarousel;
