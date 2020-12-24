import React, { useCallback } from "react";
import {  View, Text,ImageBackground,StyleSheet,FlatList,Image,Linking,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button,Input, Block } from 'galio-framework';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import fotos from './src/lista.json';
import DetailsScreen from './src/resultado.js'
import BigCard from './src/bigcard';

const bannerSuperiorID = "ca-app-pub-8454341646863233/8967724143";



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


function HomeScreen({ navigation }) {


  const [value, onChangeText] = React.useState('');
  var esto = "AAA091014835";
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

//USar cuando este ya la version premium
//<BigCard titulo="" codigoItem="Descarga nuestra version Premium" titulo2="" codigoItem2="Sin anuncios y mas funcionalidades" titulo3="" codigoItem3=""></BigCard>
  return (
<ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/uNf6hKB.png'}}>
<ScrollView >
<View>
<View style = {styles.barraSuperior}>
<Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://i.imgur.com/xrPzqws.png',
      }}
    />
    </View>
<Input
right
icon="key"
family="antdesign"
iconSize={14}
iconColor="#9648FF"
onChangeText={text => onChangeText(text)}
value={value}
valorAPasar = {value}
placeholder="Ejemplo: ABC080808HJ9"

style={{ marginTop: 40, borderColor: "#9648FF" }}
help="Utiliza el RFC del contribuyente que desees buscar"
bottomHelp
rounded
placeholderTextColor="#4F8EC9"
/>
<Button round size="large" onPress={() => navigation.navigate('Mad', {elRFC : value} )} color="#576DDD" style={{ marginTop: 10,  alignItems:'center' }}>BUSCAR</Button>
<OpenURLButton url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista completa de Contribuyentes">Lista completa de Contribuyentes</OpenURLButton>
<OpenURLButton  url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista de Definitivos">Lista de Definitivos</OpenURLButton>
<OpenURLButton url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista de Desvirtuados">Lista de Desvirtuados</OpenURLButton>
<OpenURLButton url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista de Presuntos">Lista de Presuntos</OpenURLButton>
<OpenURLButton url="https://play.google.com/store/apps/details?id=com.blacklistpremium" children="Descarga lista de Sentencia Favorable">Lista de Sentencia Favorable</OpenURLButton>



<View style={{ marginTop: 30}}>
<BannerAd
  unitId={bannerSuperiorID}
  size={BannerAdSize.ADAPTIVE_BANNER}
  requestOptions={{
    requestNonPersonalizedAdsOnly: true,
  }}
/>
</View>

</View>
</ScrollView>


      </ImageBackground>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Happy" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Mad" component={DetailsScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    paddingTop: 5,

  },
  barraSuperior:{

  flexDirection: 'row',
  marginTop:25,
  flex:1,
  alignItems: 'center',
  },


  backgroundImage: {

    flex: 1,
    resizeMode: 'cover',
  },

    topBox: {
      textAlign: 'center', // <-- the magic
      marginTop: 10,
      color: "#3658DE",
        fontSize: 41,
    },
      topBox2: {
        textAlign: 'center', // <-- the magic
          fontSize: 16,
          color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
      },
      tinyLogo: {
      left: 120,
   width: 150,
   height: 150,
 },
});

export default App;
