import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {styles} from '../style/styles';
import {Search} from '../components/Search';
import { overcastClouds, citiesArray } from '../constants/Constants';
import {Cities} from '../components/Cities';

citiesArray

export const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={overcastClouds} style={styles.container}>
        <Search />
        <Cities />
      </ImageBackground>
    </View>
  );
};
