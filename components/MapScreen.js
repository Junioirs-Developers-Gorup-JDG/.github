import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from './BottomSheet';

const MapScreen = ({ navigation }) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPlaceType, setSelectedPlaceType] = useState(null);

  const toggleBottomSheet = (location, placeType) => {
    if (bottomSheetOpen) {
      setSelectedLocation(null);
      setSelectedPlaceType(null);
    } else {
      setSelectedLocation(location);
      setSelectedPlaceType(placeType);
    }
    setBottomSheetOpen(!bottomSheetOpen);
  };

  const initialRegion = {
    latitude: -5.8142979,
    longitude: -35.2059481,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{
            latitude: -5.8151026,
            longitude: -35.2078262,
          }}
          title="UnP - Salgado Filho"
          description="Universidade Potiguar"
        />
      </MapView>
      <BottomSheet
        isOpen={bottomSheetOpen}
        onToggleBottomSheet={(location, placeType) => toggleBottomSheet(location, placeType)}
        selectedLocation={selectedLocation}
        selectedPlaceType={selectedPlaceType}
        navigation={navigation} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
