import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonSkeletonText
} from "@ionic/react";
import React from "react";

const PhotoCardExqueleton: React.FC = () => {
  return (
    <IonCard style={{borderColor: "#ffffff", borderStyle: "solid", borderWidth: 0.4}}>
      <div style={{height:"20vh", backgroundColor:"#9e9e9e" }} ></div>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText animated style={{ width: "60%" }} />
        </IonCardSubtitle>
      </IonCardHeader>
{/*       <IonCardContent className="ion-no-padding">
        <IonSkeletonText animated style={{ width: "100%" }} />
        <IonSkeletonText animated style={{ width: "100%" }} />
        <IonSkeletonText animated style={{ width: "100%" }} />
      </IonCardContent> */}
    </IonCard>
  );
};

export default PhotoCardExqueleton;
