import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={16}
      
      defaultCenter={{ lat: -0.26063, lng: -79.42805 }}
    >
      <Marker
        position={{ lat: -0.26063, lng: -79.42805 }}
      />
    </GoogleMap>
  ));
  
  export default MapWithAMarker;