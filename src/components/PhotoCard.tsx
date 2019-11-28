import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent
} from "@ionic/react";
import React from "react";
import { Photo } from "../models/photo";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <IonCard
      style={{ borderColor: "#ffffff", borderStyle: "solid", borderWidth: 0.4 }}
    >
      <img src={photo.url} alt="" />
      <IonCardHeader>
        <IonCardSubtitle color="light">{photo.author}</IonCardSubtitle>
      </IonCardHeader>
{/*       <IonCardContent color="light">
        {photo.description}
      </IonCardContent> */}
    </IonCard>
  );
};

export default PhotoCard;
