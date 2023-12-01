<template>
    <div class="dataContainer">
        <h1>{{ userChoice.location }}</h1>
        <h3>{{ weatherData.temp }}&deg;</h3>
        <div>
          <h5>L: {{ weatherData.min_temp }}&deg;</h5>
          <h5>H: {{ weatherData.max_temp }}&deg;</h5>
        </div>
        <img alt="weather icon" :src="weatherData.icon"/>
        <h4>{{ weatherData.description }}</h4>
    </div>
</template>
<script setup>
import { weatherData, userChoice } from '../store.js';
</script>
<style scoped>
    .dataContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dataContainer h1 {
        font-size: 35px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .dataContainer h3 {
        font-size: 25px;
    }

    .dataContainer div {
        display: flex;
        gap: 15px;
    }
</style>