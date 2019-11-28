import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFabButton,
  IonFab,
  IonFabList,
  IonList,
  IonItem,
  useIonViewDidEnter,
  IonRefresher,
  IonRefresherContent
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import React, { useState } from "react";
import "./Home.css";
import { camera, share, images } from "ionicons/icons";
import PhotoCard from "../components/PhotoCard";
import { Photo } from "../models/photo";
import PhotoCardExqueleton from "../components/PhotoCardExqueleton";


const Home: React.FC = () => {
  const [photos, setphotos] = useState<Photo[]>([]);

  const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  useIonViewDidEnter(() => {
    setphotos([
      {
        url:
          "https://images.unsplash.com/photo-1574837588854-34ec4e599499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        author: "Dex Ezekiel",
        description:
          "Tellus elit aliquam risus, quis sagittis metus elit ut libero. Donec ut est vel sem mattis maximus. Maecenas fringilla est ante, et molestie orci placerat eget. "
      },
      {
        url:
          "https://images.unsplash.com/photo-1574716732908-2b8203364ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80",
        author: "Max Kolganov",
        description:
          "Aliquam risus, quis sagittis metus elit ut libero. Donec ut est vel sem mattis maximus. Maecenas fringilla est ante, et molestie orci placerat eget. "
      },
      {
        url:
          "https://images.unsplash.com/photo-1574781475489-01cf7f6674c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80",
        author: "Spencer Davis",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a gravida lectus. Vivamus vestibulum, justo non aliquet iaculis, tellus elit aliquamrci placerat eget. "
      },
      {
        url:
          "https://images.unsplash.com/photo-1574799452204-637705360076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",
        author: "Taisiia Stupak",
        description:
          "Lorem ipsum dolor sit amet, consec. "
      }
    ]);
  });

  return (
    <IonPage className="home-content">
      <IonHeader color="dark">
        <IonToolbar color="dark">
          <IonTitle>Cloudinary Photos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" className="ion-padding home-content">
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingText="Desliza para actualizar"
          color="primary"
          refreshingSpinner="circular"
          refreshingText="Cargando...">
        </IonRefresherContent>
      </IonRefresher>
        <IonList className="backgroundTransparent">
          {photos.length > 0
            ? photos.map((value: Photo, index: number) => {
                return (
                    <PhotoCard photo={value} key={index} />
                );
              })
            : (<></>)}
        </IonList>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="light">
            <IonIcon color="dark" icon={share} />
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton color="light">
              <IonIcon color="dark" icon={images} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton color="light">
              <IonIcon color="dark" icon={camera} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
