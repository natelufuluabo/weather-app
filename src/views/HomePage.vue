<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div class="div1">
        <p>{{ getFrenchFormattedDate() }}</p>
        <ion-item>
          <ion-select label="Ville" v-model="userChoice" 
            @ionChange="handleChange(userChoice, cityCoordinates, location)" placeholder="Choisir">
            <ion-select-option value="Montréal">Montréal</ion-select-option>
            <ion-select-option value="Québec">Québec</ion-select-option>
            <ion-select-option value="Laval">Laval</ion-select-option>
            <ion-select-option value="Position actuelle">Position actuelle</ion-select-option>
          </ion-select>
        </ion-item>
      </div>

      <div>
        <h1>{{ userChoice }}</h1>
        <p>{{ location.lat }}</p>
        <p>{{ location.long }}</p>
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
import { cityCoordinates, location } from '../store.js';
import { handleChange, getFrenchFormattedDate } from '../utils.js';

const userChoice = reactive('Position actuelle');
</script>

<style scoped>
  .div1 {
    text-align: center;
  }
</style>
