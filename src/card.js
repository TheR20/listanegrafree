import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

const Card = (props, { navigation }) => {

  return(

<View style = {styles.barraSuperior}>
    <View  style={styles.card}>
                    <Text style={styles.Texto2}>{props.titulo}</Text>

    </View>
    <View  style={styles.card}>

                     <Text style={styles.Texto}>{props.codigoItem}</Text>
    </View>
  </View>



  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card:{
    backgroundColor:"white",

    marginHorizontal:0,
    // width:340,

    borderRadius:10,

    justifyContent:"center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

      fontFamily: 'serif',
        flex:1,

        height:80,

         textAlign: 'center',

         borderColor:'black',borderWidth:3,

  },
Texto:{
  fontFamily: 'sans-serif-medium',
   fontSize: 12
   ,color:"black" ,

      textAlign: 'center',
},
Texto2:{
  fontFamily: 'sans-serif-medium',
   fontSize: 12,color:"#2462DD" ,

     textAlign: 'center',
       marginBottom:6,

},
barraSuperior:{

flexDirection: 'row',
marginTop:5,
flex:1,

},
itemBarraSuperior:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:50,
    marginLeft:5,
    marginRight:5,

  },

});

export default Card;
