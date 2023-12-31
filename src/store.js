import { reactive } from 'vue'

export const userChoice = reactive({
    location: 'My Location'
});

export const weatherData = reactive({
    icon: '',
    description: '',
    temp: '',
    min_temp: '',
    max_temp: '',
});

export const cityCoordinates = reactive({
    montreal: {
        lat: '45.508888',
        long: '-73.561668'
    },
    laval: {
        lat: '45.612499',
        long: '-73.707092'
    },
    quebec: {
        lat: '46.829853',
        long: '-71.254028'
    },
    currPos: {
        lat: '',
        long: ''
    }
});