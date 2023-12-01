<template>
    <div class="div1">
        <p>{{ getFormattedDate() }}</p>
        <ion-item>
          <ion-select label="City" :value="userChoice.location" 
            @ionChange="event => handleChange(event, userChoice, cityCoordinates)" placeholder="Pick">
            <ion-select-option value="Montreal">Montreal</ion-select-option>
            <ion-select-option value="Quebec">Quebec</ion-select-option>
            <ion-select-option value="Laval">Laval</ion-select-option>
            <ion-select-option value="My Location">My Location</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
</template>
<script setup>
import { IonItem, IonSelect, IonSelectOption } from '@ionic/vue';
import { cityCoordinates, userChoice } from '../store.js';
import { handleChange, getFormattedDate } from '../utils.js';

</script>
<style scoped>
  .div1 {
    text-align: center;
  }
</style>