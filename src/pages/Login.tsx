import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonButton,
  IonIcon
} from "@ionic/react";
import React, { useState } from "react";
import "./Login.css";
import { playCircle } from "ionicons/icons";
import { UserContext } from "../userContext";
import { Redirect } from "react-router";

const Login: React.FC = (props) => {
  const userContext = React.useContext(UserContext);
  const [nicknameField, setNicknameField] = useState<string>("");

  userContext.setNickName(window.localStorage.getItem("cloudinary-item-nickname")||"");
  

  const submit = () => {
    if (nicknameField.length > 2) {
      userContext.setNickName(nicknameField);
      window.localStorage.setItem("cloudinary-item-nickname", nicknameField);
    }
  };

  const validateForm = () => nicknameField.length > 2;

  if (userContext.nickName.length > 0) {
    return <Redirect to={"/home"} />;
  }

  return (
    <IonPage>
      <IonContent fullscreen={true} scrollY={false} className="login-content">
        <IonGrid>
          <IonRow style={{ height: "100vh" }}>
            <IonCol size="12" className="ion-align-self-center">
              {/* FORMULARIO  */}
              <IonRow className="traslucent-gray">
                <IonCol size="12" class="ion-margin-top ion-margin-bottom">
                  <form
                    id="login-form"
                    className="form"
                    onSubmit={e => {
                      e.preventDefault();
                      submit();
                    }}
                  >
                    <IonRow>
                      <IonCol size="12">
                        <IonItem className="ion-no-padding">
                          <IonLabel
                            position="floating"
                            color="light"
                            style={{ fontWeight: 600 }}
                          >
                            Ingrese su nombre o apodo aquí
                          </IonLabel>
                          <IonInput
                            type="text"
                            color="light"
                            class="form-controll"
                            value={nicknameField}
                            onIonChange={e => setNicknameField(e.detail.value!)}
                          ></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                    {/* BOTONES  */}
                    <IonRow>
                      <IonCol size="12">
                        <IonButton
                          color="medium"
                          expand="block"
                          routerDirection="forward"
                          type="submit"
                          disabled={!validateForm()}
                        >
                          <IonIcon slot="start" icon={playCircle}></IonIcon>
                          {"Ingresar".toUpperCase()}
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </form>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
