import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomSheet = ({ isOpen, onToggleBottomSheet, selectedLocation, selectedPlaceType, navigation }) => {
  const handlePlaceTypeSelect = (placeType) => {
    onToggleBottomSheet(null, null);
    navigation.navigate('Voltar', { placeType });
  };

  return (
    <View style={[styles.container, isOpen ? styles.footer : null]}>
      {isOpen ? (
        <>
          <TouchableOpacity onPress={() => onToggleBottomSheet(null, null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Locais</Text>
          <TouchableOpacity onPress={() => handlePlaceTypeSelect('Restaurantes')} style={styles.locationButton}>
            <Text style={styles.locationButtonText}>Restaurantes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlaceTypeSelect('Pontos Turísticos')} style={styles.locationButton}>
            <Text style={styles.locationButtonText}>Pontos Turísticos</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={() => onToggleBottomSheet(null, null)} style={styles.openButton}>
          <Text style={styles.openButtonText}>Melhores Locais Para se Visitar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  footer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  openButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'blue',
  },
  openButtonText: {
    color: 'white',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  locationButton: {
    marginBottom: 8,
  },
  locationButtonText: {
    color: 'blue',
  },
});

export default BottomSheet;
