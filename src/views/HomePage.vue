<template>
  <ion-page>
    <Header/>
    
    <ion-content :fullscreen="true">
      <Picker/>
      <WeatherData/>
    </ion-content>

    <Footer/>
  </ion-page>
</template>

<script setup>
import Header from '../components/Header.vue';
import Picker from '../components/Picker.vue'
import WeatherData from '../components/WeatherData.vue'
import Footer from '../components/Footer.vue'
import { IonContent, IonPage, onIonViewWillEnter, loadingController } from '@ionic/vue';
import { getUserLocation, fetchWeatherData } from '../utils.js';

onIonViewWillEnter(async () => {
  const loading = await loadingController
    .create({
      message: 'Please wait...',
    });
  await loading.present();
  const userPos = await getUserLocation();
  await fetchWeatherData(userPos.latitude, userPos.longitude);
  loading.dismiss();
});
</script>

<style scoped></style>
