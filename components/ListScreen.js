import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ListScreen = ({ route }) => {
  const { placeType } = route.params;

  const restaurantData = [
    { id: 1, name: 'Casa de Taipa', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/restaurants/casadetaipa.webp'), latitude: -5.8680281, longitude: -35.1830215 },
    { id: 2, name: 'La Bodega Bistrô', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/restaurants/labodega.webp'), latitude: -5.8206153, longitude: 35.2159667 },
    { id: 3, name: 'Brasas Food', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/restaurants/brasas.jpg'), latitude: -5.8174768, longitude: -35.2083549 },
    { id: 4, name: 'Douce France', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/restaurants/doucefrance.webp'), latitude: -5.7889758, longitude: -35.1978338 },
    { id: 5, name: 'Dois Vinho & Gastronomia', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/restaurants/doisvinho.webp'), latitude: -5.7927731, longitude: -35.2001418 },

  ];

  const touristSpotData = [
    { id: 1, name: 'Praia de Genipapu', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/sights/genipapu.webp'), latitude: -5.693965, longitude: -35.2052305 },
    { id: 2, name: 'Praia de PontaNegra', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/sights/pontanegra.jpg'), latitude: -5.8855377, longitude: -35.1706876 },
    { id: 3, name: 'Praia do Cotovelo', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/sights/praiacotovelo.jpg'), latitude: -5.963867, longitude: -35.145298 },
    { id: 4, name: 'Maior Cajueiro do Mundo', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/sights/cajueiro.jpg'), latitude: -5.978613, longitude: -35.1233017 },
    { id: 5, name: 'Forte dos Reis Magos', description: 'Lorem Impsum Lorem Impsum', image: require('../assets/sights/fortereidosmagos.jpg'), latitude: -5.7564377, longitude: -35.1949475 },

  ];

  const data = placeType === 'Restaurantes' ? restaurantData : touristSpotData;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{`Top 5 ${placeType}s`}</Text>
      {data.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.listItem}
          onPress={() => {
            if (item.latitude && item.longitude) {
              const mapUrl = `https://www.google.com/maps/place/${item.latitude},${item.longitude}`;
              Linking.openURL(mapUrl);
            }
          }}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listItem: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
});

export default ListScreen;
