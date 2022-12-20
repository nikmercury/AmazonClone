import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: String;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
