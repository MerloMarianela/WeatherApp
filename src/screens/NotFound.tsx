import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/core';
import {Button, ImageBackground, Text, View} from 'react-native';
import {overcastClouds} from '../constants/Constants';
import {styles} from '../style/styles';

export const NotFound = () => {
  const navigation = useNavigation<any>()
  return (
    <ImageBackground source={overcastClouds} style={styles.container}>
      <View style={styles.containerDetails}>
      </View>
      <Text style={styles.temperature}>Ciudad no encontrada</Text>
      <Button title='back' onPress={() => {navigation.navigate('Home')}}/>
    </ImageBackground>
    
  );
};
