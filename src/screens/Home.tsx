import React from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from '../style/styles';
import {Search} from '../components/Search';
import {overcastClouds} from '../constants/Constants';
import {Cities} from '../components/Cities';

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
