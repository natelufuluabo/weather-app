export async function handleChange(userChoice, cityCoordinates, location) {
    const { montreal, laval, quebec, currPos } = cityCoordinates;

    switch (userChoice) {
        case "Montréal":
            location.lat = montreal.lat;
            location.long = montreal.long;
            await fetchWeatherData(location.lat, location.long);
            break;
            
        case "Québec":
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

export function getFrenchFormattedDate() {
    const date = new Date();
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
  
    return formatter.format(date);
}

async function fetchWeatherData(latitude, longitude) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1fe2d8d13d2a307d425792b9cbaf9b12`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.weather, data.main);
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