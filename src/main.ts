import { patrick, plankton, spongeBob } from './markers';
import './style.css';


const app = document.querySelector<HTMLDivElement>('#app')!;

function initialize() {
  let panorama: google.maps.StreetViewPanorama;
  const techsysDigital = { lat: -34.1020043, lng: 18.4710259 };
  const map = new google.maps.Map(app, {
    center: techsysDigital,
    zoom: 18,
    streetViewControl: false,
  });
  

  panorama = map.getStreetView();
  panorama.setPosition(techsysDigital);
  panorama.setPov({
    heading: 310,
    pitch: 0,
  });
  panorama.setVisible(true);

  spongeBob(map);
  patrick(map);
  plankton(map);
}

declare global {
  interface Window {
    initialize: () => void;
  }
}

window.initialize = initialize;
