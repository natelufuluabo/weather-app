<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Ma météo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div class="div1">
        <p>{{ formattedDate }}</p>
        <ion-item>
          <ion-select label="Ville" v-model="location" placeholder="Choisir">
            <ion-select-option value="apple">Montréal</ion-select-option>
            <ion-select-option value="banana">Québec</ion-select-option>
            <ion-select-option value="orange">Laval</ion-select-option>
            <ion-select-option value="orange">Position actuelle</ion-select-option>
          </ion-select>
        </ion-item>
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
import { ref } from 'vue'

const location = ref('')

function getFrenchFormattedDate(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    date = new Date();
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formatter = new Intl.DateTimeFormat('fr-FR', options);

  return formatter.format(date);
}

const currentDate = new Date();
const formattedDate = getFrenchFormattedDate(currentDate);
</script>

<style scoped>
  .div1 {
    text-align: center;
  }
</style>
