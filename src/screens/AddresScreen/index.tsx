import {
  Alert,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';


const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const [addressError, setAddressError] = useState('Invalid address');

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please field full name');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Please field phone number');
      return;
    }

    console.warn('Success');
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.row}>
            <Picker selectedValue={country} onValueChange={setCountry}>
              {countries.map(country => (
                <Picker.Item value={country.code} label={country.name} />
              ))}
            </Picker>
          </View>

          {/* Full name */}
          <View style={styles.row}>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              style={styles.input}
              placeholder="Full name"
              value={fullname}
              onChangeText={setFullname}
            />
          </View>

          {/* Phone number */}
          <View style={styles.row}>
            <Text style={styles.label}>Phone number</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.input}
              placeholder="Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Address */}
          <View style={styles.row}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={text => {
                setAddress(text);
                setAddressError('');
              }}
            />
            {!!addressError && (
              <Text style={styles.errorLabel}>{addressError}</Text>
            )}
          </View>

          {/* City */}
          <View style={styles.row}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
          </View>

          <Button text="Checkout" onPress={onCheckout} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
