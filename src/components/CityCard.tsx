import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../style/styles';
import { centigrados, kelvin } from '../constants/Constants';

export const CityCard = ({city, setSelectedCity}) => {
  
  const celcius = Math.trunc(city.weather.temperature.actual - kelvin);
  const navigation = useNavigation<any>()
  const windowWidth = Dimensions.get('window').width

  return (
    <TouchableOpacity  onPress={() => { setSelectedCity(city) ;navigation.navigate('Details')}} >
      <View style={{...styles.cardContainer, width: windowWidth * 0.95}}>
        <View>
          <Text style={ styles.name }> {city.name} {"\n"} {celcius}{centigrados}</Text>
        </View>
        <Image
          style={styles.iconStyle}
          source={{uri: `http://openweathermap.org/img/wn/${city.weather.summary.icon}@2x.png`}}
        />
      </View>
    </TouchableOpacity>
  );
};
