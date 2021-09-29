import {useNavigation} from '@react-navigation/core';
import {useQuery} from '@apollo/client';
import React, {useContext, useState} from 'react';
import {TextInput} from 'react-native';
import {CitiesContext} from '../contexts/citiesContext';
import {WEATHER_QUERY_NAME} from '../graphql/weatherQuery';
import {styles} from '../style/styles';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TypeSearch } from '../interfaces/Interfaces';

export const Search = () => {
  const navigation = useNavigation<any>();
  const [text, onChangeText] = useState('');
  const [noNameSelected, setNoNameSelected] = useState(true);
  const {selectCity, cities, setAllCities} = useContext<TypeSearch | any>(CitiesContext);

  const {loading, error, data} = useQuery(WEATHER_QUERY_NAME, {
    variables: {name: text},
    skip: noNameSelected,
    errorPolicy: 'all',
    onCompleted: res => {
      const response = res.getCityByName;
      if (response) {
        setAllCities([...cities, response]);
        selectCity(response);
        setNoNameSelected(true);
        navigation.navigate('Details', onChangeText(' '));
      } else {
        setNoNameSelected(true);
        navigation.navigate('NotFound');
      }
    },
    onError:(res) => {
      console.log('ERROR',res);
    },
  });

  const searchByName = (text: string | number ) => {
    if (text) {
      setNoNameSelected(false);
    }
  };

  return (
    <>
      <TextInput
        onSubmitEditing={() => searchByName(text)}
        value={text}
        placeholder="Search your favourite city..."
        style={styles.textInpuSearch}
        onChangeText={onChangeText}
      />
      <Button
      onPress={() => onChangeText('')}
      title="Clear search"
    />
    </>
  );
};
