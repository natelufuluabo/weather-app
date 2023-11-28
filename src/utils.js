export function handleChange(userChoice, cityCoordinates, location) {
    const { montreal, laval, quebec, currPos } = cityCoordinates;

    switch (userChoice) {
        case "Montréal":
            location.lat = montreal.lat;
            location.long = montreal.long;
            break;

        case "Québec":
            location.lat = quebec.lat;
            location.long = quebec.long;
            break;

        case "Laval":
            location.lat = laval.lat;
            location.long = laval.long;
            break;

        default:
            location.lat = currPos.lat;
            location.long = currPos.long;
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