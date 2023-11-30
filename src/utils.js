export async function handleChange(userChoice, cityCoordinates, location) {
    const { montreal, laval, quebec, currPos } = cityCoordinates;

    switch (userChoice) {
        case "Montréal":
            location.lat = montreal.lat;
            location.long = montreal.long;
            fetchWeatherData(location.lat, location.long);
            break;
            
        case "Québec":
            location.lat = quebec.lat;
            location.long = quebec.long;
            fetchWeatherData(location.lat, location.long);
            break;
            
        case "Laval":
            location.lat = laval.lat;
            location.long = laval.long;
            fetchWeatherData(location.lat, location.long);
            break;
            
        default:
            location.lat = currPos.lat;
            location.long = currPos.long;
            fetchWeatherData(location.lat, location.long);
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

export async function fetchWeatherData(latitude, longitude) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1fe2d8d13d2a307d425792b9cbaf9b12`);
        const data = await response.json();
        console.log(data.weather, data.main);
    } catch (error) {
        console.error(error.message);
    }
}