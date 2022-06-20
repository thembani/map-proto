import './style.css';
import bobImg from './bob.png';
import patrickImg from './patrick.png';
import planktonImg from './plankton.png';

const app = document.querySelector<HTMLDivElement>('#app')!;

function initialize() {
  let panorama: google.maps.StreetViewPanorama;
  const techsysDigital = { lat: -34.1020043, lng: 18.4710259 };
  const map = new google.maps.Map(app, {
    center: techsysDigital,
    zoom: 18,
    streetViewControl: false,
  });
  new google.maps.Marker({
    position: { lat: -34.10132975434756, lng: 18.470068315468517 },
    icon: {
      url: bobImg,
      scaledSize: new google.maps.Size(100, 139),
    },
    title: 'Sponge Bob',
    map,
  }).addListener('click', () => {
    alert('Congratulations, you have found Sponge Bob');
  });

  new google.maps.Marker({
    position: { lat: -34.102542556144535, lng: 18.472086485189532 },
    icon: {
      url: patrickImg,
      scaledSize: new google.maps.Size(100, 98),
    },
    title: 'Patrick',
    map,
  }).addListener('click', () => {
    alert('Congratulations, you have found Patrick');
  });

  new google.maps.Marker({
    position: { lat: -34.10207946811493, lng: 18.47076922067397 },
    icon: {
      url: planktonImg,
      scaledSize: new google.maps.Size(100, 134),
    },
    title: 'Plankton',
    map,
  }).addListener('click', () => {
    alert('Congratulations, you have found Plankton');
  });

  panorama = map.getStreetView();
  panorama.setPosition(techsysDigital);
  panorama.setPov({
    heading: 265,
    pitch: 0,
  });
  panorama.setVisible(true);
}

declare global {
  interface Window {
    initialize: () => void;
  }
}

window.initialize = initialize;
initialize();
