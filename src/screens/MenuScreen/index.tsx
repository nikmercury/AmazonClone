import {SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {
  const onSignOut = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView>
      <Button text="Sign Out" onPress={onSignOut} />
    </SafeAreaView>
  );
};

export default MenuScreen;
