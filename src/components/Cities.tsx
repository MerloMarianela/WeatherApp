import {useQuery} from '@apollo/client';
import React, {useContext} from 'react';
import { ScrollView } from 'react-native';
import {citiesArray} from '../constants/Constants';
import {CitiesContext} from '../contexts/citiesContext';
import {WEATHER_QUERY} from '../graphql/weatherQuery';
import {CityCard} from './CityCard';

export const Cities = () => {
  const {selectCity, cities, setAllCities} =useContext(CitiesContext);

  citiesArray.map(id => {
    const {loading, error, data} = useQuery(WEATHER_QUERY, {
      variables: {id},
      errorPolicy: 'all',
      onCompleted: res => {
        const response = res.getCityById[0];
        setAllCities([...cities, response]);
      },
      onError: (res) => {
        console.log('ERROR', res);
      },
    });
  });

  const ciudades = cities.map(city => (
    <CityCard /*keyExtractor={city => city.id}*/ city={city} setSelectedCity={selectCity}/>
    ));

    return (
      <ScrollView>
          {ciudades}
      </ScrollView>
    )
};