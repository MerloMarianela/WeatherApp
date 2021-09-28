import React from 'react';
import {ConvertProps} from '../interfaces/Interfaces';

export const unixTimeStampToHoursAndMinutes = ({
  unixTime,
  unixTimeZone,
}: ConvertProps) => {
  const date = new Date((unixTime + unixTimeZone) * 1000);
  const timeFormat =
    ('0' + date.getUTCHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2);

  return timeFormat;
};

export const metersToKilometers = (meters: number) => {
  const kilometers = meters / 1000;
  return kilometers;
};

export const kelvinToFahrenheit = (kelvinFa: number) => {
  const fahrenheit = ((kelvinFa - 273.15) * 9) / 5 + 32;
  return fahrenheit;
};

export const kelvinToCelcius = (kelvin: number) => {
  const celcius = kelvin - 273.15;
  return celcius;
};
