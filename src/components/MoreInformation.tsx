import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';

export const MoreInformation = () => {
  const navigation = useNavigation<any>();
  return (
    <Button
      color="grey"
      title="More Information"
      onPress={() => navigation.navigate('Details')}
    />
  );
};
