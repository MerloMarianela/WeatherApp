import React, {createContext, useState} from 'react';

export const CitiesContext = createContext<any>({});

const CitiesContextProvider = (props) => {

  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState({});

  const setAllCities = (cities) => {
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
