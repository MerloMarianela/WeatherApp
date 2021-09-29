import React, {createContext, useState} from 'react';
import { GetCityByID, TypeSearch } from '../interfaces/Interfaces';

export const CitiesContext = createContext<Partial<TypeSearch>>({});

const CitiesContextProvider = (props) => {

  const [cities, setCities] = useState<[]>([])
  const [selectedCity, setSelectedCity] = useState<GetCityByID>();

  const setAllCities = (cities: []) => {
    setCities(cities)
  }

  const selectCity = selected => {
    setSelectedCity(selected);
  };
  
  return (
    <CitiesContext.Provider value={{selectedCity, selectCity, cities, setAllCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
