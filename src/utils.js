import { weatherData } from "./store";
import { Geolocation } from '@capacitor/geolocation';

export async function handleChange(userChoice, cityCoordinates, location) {
    const { montreal, laval, quebec, currPos } = cityCoordinates;

    switch (userChoice) {
        case "Montreal":
            location.lat = montreal.lat;
            location.long = montreal.long;
            await fetchWeatherData(location.lat, location.long);
            break;
            
        case "Quebec":
            location.lat = quebec.lat;
            location.long = quebec.long;
            await fetchWeatherData(location.lat, location.long);
            break;
            
        case "Laval":
            location.lat = laval.lat;
            location.long = laval.long;
            await fetchWeatherData(location.lat, location.long);
            break;
            
        default:
            location.lat = currPos.lat;
            location.long = currPos.long;
            await fetchWeatherData(location.lat, location.long);
            break;
    }
}

export function getFormattedDate() {
    const date = new Date();
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    const formatter = new Intl.DateTimeFormat('en-EN', options);
  
    return formatter.format(date);
}

export async function fetchWeatherData(latitude, longitude) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1fe2d8d13d2a307d425792b9cbaf9b12`;
        const response = await fetch(url);
        const data = await response.json();
        weatherData.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherData.description = data.weather[0].description;
        weatherData.temp = kelvinToCelsius(data.main.temp);
        weatherData.min_temp = kelvinToCelsius(data.main.temp_min);
        weatherData.max_temp = kelvinToCelsius(data.main.temp_max);
    } catch (error) {
        console.error(error.message);
    }
}

function kelvinToCelsius(tempKelvin) {
    if (typeof tempKelvin !== 'number' || isNaN(tempKelvin)) {
      throw new Error('Invalid input. Please provide a valid number for temperature in Kelvin.');
    }
  
    const tempCelsius = tempKelvin - 273.15;
  
    const roundedCelsius = Math.round(tempCelsius);
  
    return roundedCelsius;
}

export async function getUserLocation() {
  const coordinates = await Geolocation.getCurrentPosition();
  const userLocation = {
    latitude: coordinates.coords.latitude,
    longitude: coordinates.coords.longitude
  };
  return userLocation
}