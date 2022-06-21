import bobImg from './bob.png';
import patrickImg from './patrick.png';
import planktonImg from './plankton.png';

export function spongeBob(map: google.maps.Map) {
  return new google.maps.Marker({
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
}

export function patrick(map: google.maps.Map) {
  return new google.maps.Marker({
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
}

export function plankton(map: google.maps.Map) {
  return new google.maps.Marker({
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
}
