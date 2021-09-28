import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, ImageBackground, Text, View} from 'react-native';
import {overcastClouds} from '../constants/Constants';
import {CitiesContext} from '../contexts/citiesContext';
import {styles} from '../style/styles';
import {SingleCity} from '../components/SingleCity';

export const Details = () => {
  const navigation = useNavigation<any>();
  const {selectedCity} = useContext(CitiesContext);

  return (
    <ImageBackground source={overcastClouds} style={styles.container}>
      <View style={styles.containerDetails}>
        <SingleCity city={selectedCity} />
      </View>
      <Button
        color="grey"
        title="Back"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </ImageBackground>
  );
};
