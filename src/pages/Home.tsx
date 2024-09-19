import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ContentContainer } from "../components/HomeContentContainer";
import './Home.css';

const creator_info = {
  'name': 'Andro Lay'
}

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title" size="large">Metric Converter</IonTitle>
          <IonTitle className="title" size="small">By: {creator_info.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <ContentContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
