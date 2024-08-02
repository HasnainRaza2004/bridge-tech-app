<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-icon aria-hidden="true" :color="'white'" :icon="menu" />
        <ion-chip>
          <ion-avatar>
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
          <ion-label>Hi Guest</ion-label>
        </ion-chip>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonIcon,
  IonToolbar,
  IonAvatar,
  IonChip,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { menu } from 'ionicons/icons';


export default {
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonChip,
  },
};
</script>