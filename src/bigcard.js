import React, { useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'galio-framework';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Linking,
} from 'react-native';



const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button round size="large" color="#BDBDBF"  title={children} onPress={handlePress}>{children}</Button>;
};


const BigCard = (props, { navigation }) => {

  return(

<View style = {styles.barraSuperior}>
  <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/a1Nwuna.jpg'}}>

  <Text style={styles.Texto2}>{props.titulo}</Text>
    <Text style={styles.Texto}>{props.codigoItem}</Text>

    <Text style={styles.Texto2}>{props.titulo2}</Text>
      <Text style={styles.Texto}>{props.codigoItem2}</Text>

      <Text style={styles.Texto2}>{props.titulo3}</Text>
        <Text style={styles.Texto}>{props.codigoItem3}</Text>


<OpenURLButton url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista de Sentencia Favorable">Descargar Archivo TXT</OpenURLButton>
    </ImageBackground>
  </View>



  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C58F5',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card:{
    backgroundColor:"#0E1642",

    marginHorizontal:0,
    // width:340,

    borderRadius:10,

    justifyContent:"center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

      fontFamily: 'sans-serif-condensed',
        flex:1,

        height:220,

         textAlign: 'center',

         borderColor:'black',borderWidth:3,

  },
Texto:{
  fontFamily: 'sans-serif-medium',
   fontSize: 18,color:"white" ,
    fontWeight: 'bold',
      textAlign: 'center',
},
Texto2:{
  fontFamily: 'sans-serif-medium',
   fontSize: 14,color:"#7D8DE3" ,
    fontWeight: 'bold',
     textAlign: 'center',
       marginBottom:6,

},
barraSuperior:{

flexDirection: 'row',
marginTop:5,
flex:1,

},

  backgroundImage: {

    flex: 1,
    resizeMode: 'cover',
  },


});

export default BigCard;
