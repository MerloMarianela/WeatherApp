import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {
  centigrados,
  humidityColor,
  kelvin,
  porcentajedUnit,
  termometroColor,
  windColor,
  windUnit,
} from '../constants/Constants';
import {styles} from '../style/styles';

export const SingleCity = ({city}) => {

  const date = new Date(parseInt(city.weather.timestamp) * 1000).toDateString();
  const celcius = Math.trunc(city.weather.temperature.actual - kelvin);
  const feelsLike = Math.trunc(city.weather.temperature.feelsLike - kelvin);
  const min = Math.trunc(city.weather.temperature.min - kelvin);
  const max = Math.trunc(city.weather.temperature.max - kelvin);

  return (
    <View style={{flexDirection: 'column', flex: 6}}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.subTitlePage}>
            {' '}
            {city.name}_{city.country}
          </Text>
          <Text style={styles.subTitle}>{city.weather.summary.title}</Text>
          <Text style={styles.temperature}>
            {celcius}
            {centigrados}
          </Text>

          <Text style={styles.subTitle}>{date}</Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${city.weather.summary.icon}@2x.png`,
            }}
          />
          <Text style={styles.subTitleInformation}>
            Descripción:{'\n'}
            {city.weather.summary.description}
          </Text>
        </View>

        <View>
          <Image style={styles.wind} source={windColor} />
          <Text style={styles.subTitleInformation}>
            Viento: {'\n'}
            {feelsLike}
            {windUnit}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image style={styles.wind} source={humidityColor} />
          <Text style={styles.subTitleInformation}>
            Humedad:{'\n'}
            {city.weather.clouds.humidity}
            {porcentajedUnit}
          </Text>
        </View>

        <View>
          <Image style={styles.wind} source={termometroColor} />
          <Text style={styles.subTitleInformation}>
            min: {min}
            {centigrados} {'\n'} max:{max}
            {centigrados}
          </Text>
        </View>
      </View>
    </View>
  );
};
