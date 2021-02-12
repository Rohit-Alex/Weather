import React from 'react';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
const App = () => {
  const [city,setCity] = React.useState("");
  const [cityWeather,setCityWeather] = React.useState({});
  const [visibility,setVisibility]=React.useState("");
  const [country,setCountry]=React.useState("");

  const fetchCityWeather=()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
    .then((response)=>response.json())
    .then((result)=>{
      console.log(result);
      setVisibility(result.visibility);
      setCountry(result.sys.country);
      setCityWeather(result.main);
    });
  };
  
  return (
    <>
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    <CityWeather cityWeather={cityWeather} country={country} visibility={visibility} />
    </>
  );
};

export default App;