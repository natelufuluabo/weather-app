<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Weather</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div class="div1">
        <p>{{ getFormattedDate() }}</p>
        <ion-item>
          <ion-select label="City" v-model="userChoice" 
            @ionChange="handleChange(userChoice, cityCoordinates, location)" placeholder="Pick">
            <ion-select-option value="Montreal">Montreal</ion-select-option>
            <ion-select-option value="Quebec">Quebec</ion-select-option>
            <ion-select-option value="Laval">Laval</ion-select-option>
            <ion-select-option value="My Location">My Location</ion-select-option>
          </ion-select>
        </ion-item>
      </div>

      <div class="dataContainer">
        <h1>{{ userChoice }}</h1>
        <h3>{{ weatherData.temp }}&deg;</h3>
        <div>
          <h5>L: {{ weatherData.min_temp }}&deg;</h5>
          <h5>H: {{ weatherData.max_temp }}&deg;</h5>
        </div>
        <h4>{{ weatherData.description }}</h4>
      </div>
    </ion-content>

    <ion-footer>
        <ion-toolbar color="primary">
          <ion-title>&copy; Nathan Kalala</ion-title>
        </ion-toolbar>
      </ion-footer>
  </ion-page>
</template>

<script setup>
import { 
  IonContent, IonHeader, IonPage, IonTitle, 
  IonToolbar, IonCard, IonItem, IonSelect, IonSelectOption
} from '@ionic/vue';
import { ref, reactive } from 'vue';
import { cityCoordinates, location, weatherData } from '../store.js';
import { handleChange, getFormattedDate } from '../utils.js';

const userChoice = reactive('My Location');
</script>

<style scoped>
  .div1 {
    text-align: center;
  }

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
